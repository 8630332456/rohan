import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEventBindingComponent } from './topic-event-binding.component';

describe('TopicEventBindingComponent', () => {
  let component: TopicEventBindingComponent;
  let fixture: ComponentFixture<TopicEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
