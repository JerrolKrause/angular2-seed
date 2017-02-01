import { Routes, RouterModule } from '@angular/router';

//Routable components
import { LayoutMainComponent } from './components/masterpage/layout-main';
import { NoContentComponent } from './components/routes/no-content';
import { HomeComponent } from './components/routes/home';
import { ScaffoldingComponent } from './components/routes/scaffolding';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    {
        path: '', component: LayoutMainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'scaffolding', component: ScaffoldingComponent },
            { path: '**', component: NoContentComponent }
        ]
    }
   
    
]; 