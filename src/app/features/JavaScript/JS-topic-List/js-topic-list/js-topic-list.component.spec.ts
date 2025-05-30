import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTopicListComponent } from './js-topic-list.component';

describe('JsTopicListComponent', () => {
  let component: JsTopicListComponent;
  let fixture: ComponentFixture<JsTopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsTopicListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
