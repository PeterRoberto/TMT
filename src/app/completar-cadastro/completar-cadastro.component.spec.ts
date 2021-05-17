import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarCadastroComponent } from './completar-cadastro.component';

describe('CompletarCadastroComponent', () => {
  let component: CompletarCadastroComponent;
  let fixture: ComponentFixture<CompletarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletarCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
