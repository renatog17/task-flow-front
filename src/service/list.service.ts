import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskList } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private taskLists: TaskList[] = [];
  private listsSubject: BehaviorSubject<TaskList[]> = new BehaviorSubject<TaskList[]>([]);

  constructor() {
    const savedTaskLists = localStorage.getItem('tasklists')
    if (savedTaskLists) {
      this.taskLists = JSON.parse(savedTaskLists);
      this.listsSubject.next(this.taskLists);
    } else {
      this.initializeLocalStorage();
    }
  }

  createTaskList(taskList: TaskList) {
    this.taskLists.push(taskList)
    this.saveTaskListsToLocalStorage()
  }

  readTaskListByBoardId(boardId: number): TaskList[] {
    return this.taskLists.filter(list => list.boardId === boardId);
  }

  updateTaskList(taskListId: number) {

  }

  deleteTaskList(taskListId: number) {

  }

  getTaskListObservable(): BehaviorSubject<TaskList[]> {
    return this.listsSubject;
  }

  //métodos auxiliares
  private saveTaskListsToLocalStorage() {
    localStorage.setItem('tasklists', JSON.stringify(this.taskLists))
    this.listsSubject.next(this.taskLists);
  }

  private initializeLocalStorage(): void {
    const initialTaskLists: TaskList[] = [
      {
        id: 1,
        boardId: 1,
        title: 'To-do'
      },
      {
        id: 2,
        boardId: 1,
        title: 'Doing'
      },
      {
        id: 3,
        boardId: 1,
        title: 'Done'
      },
      {
        id:4,
        boardId: 2,
        title: 'Teste'
      },
      {
        id: 1,
        boardId: 1,
        title: 'To-do'
      },
      {
        id: 2,
        boardId: 1,
        title: 'Doing'
      },
      {
        id: 3,
        boardId: 1,
        title: 'Done'
      },
    ]
    this.taskLists = initialTaskLists;
    this.saveTaskListsToLocalStorage();
  }

}
