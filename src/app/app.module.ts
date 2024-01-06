import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BoardViewComponent,
    ListViewComponent,
    TaskViewComponent,
    ModalTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
