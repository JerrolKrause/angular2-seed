import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

// import any modal content components
import { SampleModalContentComponent } from '../../modals/sample-modal-content/sample-modal-content.component';


@Component({
  selector: 'button-modal',
  templateUrl: './button-modal.component.html',
  //styleUrls: ['./button-modal.component.css']
})
export class ButtonModalComponent implements OnInit {
  modalContent = {
    // add modal content components to this map
    sample: SampleModalContentComponent
  };
  @Input() classes: string = 'btn btn-outline-primary btn-sm';
  @Input() modalName: string;
  @Input() modalSize: string = "md";
  @Input() model: any;
  @Input() callback: Function;

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openModal() {
    const modalToOpen = this.modalContent[this.modalName];
    
    // store reference to the modal instance
    const modalRef = this.modalService.open(modalToOpen, {backdrop: 'static', size: this.modalSize});

    // add any passed in data to the modal instance
    modalRef.componentInstance.model = this.model;
    
    // wait for promise that is returned when modal is closed or dismissed
    modalRef.result.then((closeReason) => {
      console.log('modal was closed: ', closeReason);
      this.callback();
    }, (dismissReason) => {
      console.log('modal was dismissed: ', dismissReason);
    });
  }

}