import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);


  constructor() {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.tasksSubject.next(this.tasks);
    } else {
      this.initializeLocalStorage();
    }
  }

  readTaskByListId(listId: number): Task[] {
    return this.tasks.filter(task => task.id = listId)
  }

  private saveTaskListsToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.tasksSubject.next(this.tasks);
  }

  private initializeLocalStorage(): void {
    const initialTasks: Task[] = [
      {
        id: 1,
        title: 'Teste id 1',
        description: 'Descrição teste id 1',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      },
      {
        id: 2,
        title: 'Teste id 2',
        description: 'Descrição teste id 2',
        creationDate: new Date(),
        deadline: new Date(),
        listId: 1,
        complete: false
      }
    ]
    this.tasks = initialTasks;
    this.saveTaskListsToLocalStorage();
  }
}
