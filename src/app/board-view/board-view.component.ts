import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardService } from 'src/service/board.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit{

  constructor( private boardService: BoardService){}

  selectedBoard: any;
  private boardSubscription: Subscription = new Subscription();


  ngOnInit(): void {
    this.boardSubscription = this.boardService.getSelectedBoard().subscribe(board => {
      this.selectedBoard = board;
      console.log("Board selecionado: ", this.selectedBoard);
    });
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.boardSubscription.unsubscribe();
  }
}
