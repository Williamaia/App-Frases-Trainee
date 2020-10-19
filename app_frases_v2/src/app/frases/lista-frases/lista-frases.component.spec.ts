import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrasesComponent } from './lista-frases.component';

describe('ListaFrasesComponent', () => {
  let component: ListaFrasesComponent;
  let fixture: ComponentFixture<ListaFrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
