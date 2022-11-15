import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharAtividadeComponent } from './acompanhar-atividade.component';

describe('AcompanharAtividadeComponent', () => {
  let component: AcompanharAtividadeComponent;
  let fixture: ComponentFixture<AcompanharAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanharAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanharAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
