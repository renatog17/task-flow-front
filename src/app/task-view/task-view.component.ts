import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {

  isModalVisible:boolean = false;
  @Input() task:any;

  showModal(){
    this.isModalVisible = true;
  }

  handleModalClosed(event: boolean) {
    this.isModalVisible = false;
  }
}
