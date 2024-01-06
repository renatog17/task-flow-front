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
    if(savedBoards){
      this.boards = JSON.parse(savedBoards);
      this.boardsSubject.next(this.boards);
    }else{
      this.initializeLocalStorage();
    }
  }

  getBoards():Board[]{
    return this.boards;
  }

  getBoardById(id: number): Board | undefined {
    return this.boards.find(board => board.id === id);
  }

  addBoard(newBoard:Board):void{
    this.boards.push(newBoard);
    this.saveBoardsToLocalStorage();
  }

  private saveBoardsToLocalStorage(): void{
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }

  getBoardObservable(): BehaviorSubject<Board[]>{
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
        title: 'Provas',
        lists: [
          {
            id: 1,
            title: 'To Do',
            tasks: [
              {
                id: 1,
                title: 'Prova de matemática',
                description: 'Revisar função do segundo grau',
                creationDate: new Date(),
                deadline: new Date()
              },{
                id: 2,
                title: 'Prova de Física',
                description: 'Ler capítulo 2 do livro de Alvarengo, reassistir série cosmos e fazer o experimento de voltar no tempo para participar da festa de Stephen Hawking',
                creationDate: new Date(),
                deadline: new Date()
              },
              {
                id: 3,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },{
                id: 4,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },{
                id: 4,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },{
                id: 4,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },{
                id: 4,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              }
              // Adicione outras tarefas, se necessário
            ]
          },
          {
            id:2,
            title: 'teste',
            tasks: [
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              }
            ]
          },
          {
            id:3,
            title: 'teste3',
            tasks: [
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },
            ]
          },
          {
            id:4,
            title: 'teste4',
            tasks: [
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },
            ]
          }
          ,
          {
            id:5,
            title: 'teste5',
            tasks: [
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },
            ]
          }
          ,
          {
            id:6,
            title: 'teste6',
            tasks: [
              {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
                creationDate: new Date(),
                deadline: new Date()
              },
            ]
          }
          // Adicione outras listas, se necessário
        ]
      },
      {
        id:2,
        title:"Estudo",
        lists:[]
      },
      {
        id:3,
        title:"Jogos",
        lists:[]
      }
      // Adicione outros boards, se necessário
    ];

    this.boards = initialBoards;
    this.saveBoardsToLocalStorage();
    this.boardsSubject.next(this.boards);
  }
}
