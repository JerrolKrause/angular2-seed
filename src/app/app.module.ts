import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

//Services
//import { CacheService } from './services/cache.service';
import { ScaffoldService } from './services/scaffold.service';

// App is our top level component
import { AppComponent } from './app.component';

//Masterpage
import { LayoutMainComponent } from './components/masterpage/layout-main';
import { HeaderComponent } from './components/masterpage/header';
import { NavMainComponent } from './components/masterpage/nav-main';
import { FooterComponent } from './components/masterpage/footer';

//Routes
import { HomeComponent } from './components/routes/home';
import { NoContentComponent } from './components/routes/no-content';
import { ScaffoldingComponent } from './components/routes/scaffolding';

//UI components
import { ButtonModalComponent } from './components/ui/buttons/button-modal';

//Modals
import { SampleModalContentComponent } from './components/ui/modals/sample-modal-content';

//Styles
import '../styles/styles.scss';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
      AppComponent,
      LayoutMainComponent,
      HomeComponent,
      NoContentComponent,
      HeaderComponent,
      NavMainComponent,
      FooterComponent,
      ScaffoldingComponent,
      ButtonModalComponent,
      SampleModalContentComponent
  ],
  entryComponents: [
    SampleModalContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NgbModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
      ENV_PROVIDERS,
      APP_PROVIDERS,
      ScaffoldService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
