import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { FormsModule } from '@angular/forms';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { ModalBoardDeleteConfirmationComponent } from './modal-board-delete-confirmation/modal-board-delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BoardViewComponent,
    ListViewComponent,
    TaskViewComponent,
    ModalTaskComponent,
    ItemMenuComponent,
    NewBoardComponent,
    ModalBoardDeleteConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
