import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from 'src/service/board.service';
import { Board } from '../task';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent{
  imageUrl = "assets/trash.png";
  showTrashIcon = false;

  isModalVisible:boolean = false;
  @Input() board!:Board;

  constructor( private boardService:BoardService){

  }

  handleModalClosed(event: boolean) {
    this.isModalVisible = false;
  }
  deleteBoard(board: Board){
    console.log(board.id)
    this.boardService.deleteBoard(board.id!)
  }

  setSelectedBoard(board: Board){
    this.boardService.setSelectedBoard(board);
  }

  showModal(){
    this.isModalVisible = true;
  }
}
