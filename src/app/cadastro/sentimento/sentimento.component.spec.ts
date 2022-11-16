import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentoComponent } from './sentimento.component';

describe('SentimentoComponent', () => {
  let component: SentimentoComponent;
  let fixture: ComponentFixture<SentimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
