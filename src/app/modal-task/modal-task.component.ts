import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent {

  @Input() task:any;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal(event: Event) {
    event.stopPropagation();
    this.closeModalEvent.emit(true);
  }
}
