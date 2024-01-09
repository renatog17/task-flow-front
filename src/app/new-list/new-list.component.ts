import { Component, Input } from '@angular/core';
import { TaskList } from '../task';
import { ListService } from 'src/service/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {

  @Input() board:any;
  newTaskList: string = "";

  constructor(private listService: ListService){}

  addNewList(){
    const taskList: TaskList = {
      title: this.newTaskList,
      boardId: this.board.id
    }
    this.newTaskList = "";
    this.listService.createTaskList(taskList)
  }
}
