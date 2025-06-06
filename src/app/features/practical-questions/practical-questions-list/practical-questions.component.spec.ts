import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalQuestionsComponent } from './practical-questions.component';

describe('PracticalQuestionsComponent', () => {
  let component: PracticalQuestionsComponent;
  let fixture: ComponentFixture<PracticalQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
