import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from 'src/service/board.service';
import { Board } from '../task';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent{
  imageUrl = "assets/trash.png";
  showTrashIcon = false;

  @Input() board!:Board;

  constructor( private boardService:BoardService){

  }
  // ngOnInit(): void {
  //   console.log(this.board.id)
  // }


  deleteBoard(board: Board){
    console.log(board.id)
    this.boardService.deleteBoard(board.id!)
  }
}
