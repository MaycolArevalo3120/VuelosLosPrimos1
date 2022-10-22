import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVueloComponent } from './listar-vuelo.component';

describe('ListarVueloComponent', () => {
  let component: ListarVueloComponent;
  let fixture: ComponentFixture<ListarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
