import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete-confirmation',
  templateUrl: './modal-delete-confirmation.component.html',
  styleUrls: ['./modal-delete-confirmation.component.scss']
})
export class ModalDeleteConfirmationComponent {

  @Input() item:any | undefined;
  @Output() simOptionChoisedEvent = new EventEmitter<boolean>();
  // @Output() closeModalEvent = new EventEmitter<boolean>();


  // closeModal(event: Event) {
  //   event.stopPropagation();
  //   this.closeModalEvent.emit(true);
  // }
  simButton(){
    this.simOptionChoisedEvent.emit(true);
    console.log("Sim clicado"+ this.item.id) 
  }

  naoButton(){
    this.simOptionChoisedEvent.emit(false);
    console.log("Não clicado")
  }
}
