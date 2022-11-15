import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDashboardComponent } from './atividade-dashboard.component';

describe('AtividadeDashboardComponent', () => {
  let component: AtividadeDashboardComponent;
  let fixture: ComponentFixture<AtividadeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
