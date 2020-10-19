import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFraseComponent } from './add-frase.component';

describe('AddFraseComponent', () => {
  let component: AddFraseComponent;
  let fixture: ComponentFixture<AddFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
