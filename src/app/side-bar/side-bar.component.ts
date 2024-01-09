import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/service/board.service';
import { Board } from '../task';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  constructor(private boardService: BoardService){}
  boards: Board[] = []

  ngOnInit(): void {
    //this.boards = this.boardService.getBoards();
    this.boardService.getBoardObservable().subscribe(( boards:Board[]) =>{
      this.boards = boards;
    });
  }
}
