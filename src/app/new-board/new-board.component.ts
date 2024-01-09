import { Component } from '@angular/core';
import { Board } from '../task';
import { BoardService } from 'src/service/board.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent {

  constructor(private boardService: BoardService){

  }
  newBoardName:string = "";

  onEnterKey(){
    const novoBoard: Board = {
      title: this.newBoardName
    };
    this.boardService.addBoard(novoBoard);
    this.newBoardName = "";
  }
}
