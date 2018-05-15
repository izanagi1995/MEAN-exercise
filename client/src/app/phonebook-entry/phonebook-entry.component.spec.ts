import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookEntryComponent } from './phonebook-entry.component';

describe('PhonebookEntryComponent', () => {
  let component: PhonebookEntryComponent;
  let fixture: ComponentFixture<PhonebookEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
