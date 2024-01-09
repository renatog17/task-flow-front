import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../task';
import { BoardService } from 'src/service/board.service';

@Component({
  selector: 'app-modal-board-delete-confirmation',
  templateUrl: './modal-board-delete-confirmation.component.html',
  styleUrls: ['./modal-board-delete-confirmation.component.scss']
})
export class ModalBoardDeleteConfirmationComponent {

  @Input() board:Board | undefined;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal(event: Event) {
    event.stopPropagation();
    this.closeModalEvent.emit(true);
  }

  constructor(private boardService: BoardService){

  }

  simButton(){
    console.log("Sim clicado")
    this.boardService.deleteBoard(this.board!.id!)
  }

}
