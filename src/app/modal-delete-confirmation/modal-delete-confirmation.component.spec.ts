import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteConfirmationComponent } from './modal-delete-confirmation.component';

describe('ModalDeleteConfirmationComponent', () => {
  let component: ModalDeleteConfirmationComponent;
  let fixture: ComponentFixture<ModalDeleteConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
