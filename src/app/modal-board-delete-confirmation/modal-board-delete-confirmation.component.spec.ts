import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoardDeleteConfirmationComponent } from './modal-board-delete-confirmation.component';

describe('ModalBoardDeleteConfirmationComponent', () => {
  let component: ModalBoardDeleteConfirmationComponent;
  let fixture: ComponentFixture<ModalBoardDeleteConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBoardDeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(ModalBoardDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
