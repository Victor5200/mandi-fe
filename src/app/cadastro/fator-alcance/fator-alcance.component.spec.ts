import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatorAlcanceComponent } from './fator-alcance.component';

describe('FatorAlcanceComponent', () => {
  let component: FatorAlcanceComponent;
  let fixture: ComponentFixture<FatorAlcanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatorAlcanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatorAlcanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
