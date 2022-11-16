import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilarComponent } from './pilar.component';

describe('PilarComponent', () => {
  let component: PilarComponent;
  let fixture: ComponentFixture<PilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
