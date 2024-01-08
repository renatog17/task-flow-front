import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board, Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private selectedBoardSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedBoard$: Observable<any> = this.selectedBoardSubject.asObservable();

  private boards: Board[] = [];
  private boardsSubject: BehaviorSubject<Board[]> = new BehaviorSubject<Board[]>([]);

  constructor() {
    const savedBoards = localStorage.getItem('boards');
    if (savedBoards) {
      this.boards = JSON.parse(savedBoards);
      this.boardsSubject.next(this.boards);
    } else {
      this.initializeLocalStorage();
    }
  }

  addBoard(newBoard: Board): void {
    let maxId = 0;
    this.boards.forEach(board => {
      if (board.id !== undefined && !isNaN(board.id)) {
        if(board.id > maxId){
          maxId = board.id;
        }
      }
    })
    const newId = maxId+1;
    newBoard.id = newId;

    this.boards.push(newBoard);
    this.saveBoardsToLocalStorage();
  }

  getBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: number): Board | undefined {
    return this.boards.find(board => board.id === id);
  }
// 
  deleteBoard(id: number): void {
    const boardIndex = this.boards.findIndex(board => board.id === id);
  
    if (boardIndex !== -1) {
      this.boards.splice(boardIndex, 1);
      this.saveBoardsToLocalStorage();
      this.boardsSubject.next(this.boards);
    }
  }
//

  private saveBoardsToLocalStorage(): void {
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }

  getBoardObservable(): BehaviorSubject<Board[]> {
    return this.boardsSubject;
  }

  setSelectedBoard(board: any) {
    this.selectedBoardSubject.next(board);
  }

  getSelectedBoard(): Observable<any> {
    return this.selectedBoard$;
  }

  private initializeLocalStorage(): void {
    // Exemplo de dados iniciais para os boards
    const initialBoards: Board[] = [
      {
        id: 1,
        title: "Errands"
      },
      {
        id: 12,
        title: "Estudo"
      },
      {
        id: 13,
        title: "Jogos"
      }
      // Adicione outros boards, se necessário
    ];

    this.boards = initialBoards;
    this.saveBoardsToLocalStorage();
    this.boardsSubject.next(this.boards);
  }
}
