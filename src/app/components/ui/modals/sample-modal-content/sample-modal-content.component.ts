import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sample-modal-content',
  templateUrl: './sample-modal-content.component.html',
})
export class SampleModalContentComponent implements OnInit {
  error: boolean | string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  handleSubmit() {
    this.error = false;
    // do some http | async stuff
    // pass in boolean to test
    this.sampleAsync().then((res) => {
      // Successful
      this.activeModal.close(res);
    }, (res) => {
      // Error
      this.error = res;
    });
  }

  sampleAsync(result:boolean = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(result) {
          resolve('Request was Successful');
        } else {
          reject('Request Failed');
        }
      }, 1000)
    })
  }
}
