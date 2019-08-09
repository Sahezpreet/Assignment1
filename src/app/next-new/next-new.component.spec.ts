import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNewComponent } from './next-new.component';

describe('NextNewComponent', () => {
  let component: NextNewComponent;
  let fixture: ComponentFixture<NextNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
