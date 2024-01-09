import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from 'src/service/task.service';
import { BoardService } from 'src/service/board.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit{
  
  @Input() list: any;
  tasks: Task[] = []
  imageUrl = "assets/reticencias.png";

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    this.tasks = this.taskService.readTaskByListId(this.list.id);
  }
}
