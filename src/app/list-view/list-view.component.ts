import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from 'src/service/task.service';
import { BoardService } from 'src/service/board.service';
import { ListService } from 'src/service/list.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit{
  
  @Input() list: any;
  tasks: Task[] = []
  imageUrl = "assets/trash.png";
  isModalVisible = false;


  constructor(private taskService: TaskService, private taskListService: ListService){

  }

  ngOnInit(): void {
    this.tasks = this.taskService.readTaskByListId(this.list.id);
  }

  showModal(){
    this.isModalVisible = true;
  }

  handleModalOption(event: boolean){
    this.isModalVisible = false;
    this.taskListService.deleteTaskList(this.list.id)
  }
}
