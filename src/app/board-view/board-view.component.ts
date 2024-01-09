import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardService } from 'src/service/board.service';
import { ListService } from 'src/service/list.service';
import { TaskList } from '../task';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit{

  constructor( private boardService: BoardService, private listService: ListService){}

  editing = false;
  selectedBoard: any;
  taskList: TaskList[] = [];
  imageUrl = "assets/trash.png"
  private boardSubscription: Subscription = new Subscription();


  ngOnInit(): void {
    this.boardSubscription = this.boardService.getSelectedBoard().subscribe(board => {
      this.selectedBoard = board;
      this.taskList = this.listService.readTaskListByBoardId(this.selectedBoard.id); 
    });
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.boardSubscription.unsubscribe();
  }

  toggleEdit(){
    this.editing = !this.editing;
  }

  updateBoard(titleInput: string){
    this.selectedBoard.title = titleInput;
    this.boardService.updateBoard(this.selectedBoard)
    this.editing = !this.editing;
  }
}
