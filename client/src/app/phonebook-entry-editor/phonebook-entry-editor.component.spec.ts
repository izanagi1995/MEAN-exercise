import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookEntryEditorComponent } from './phonebook-entry-editor.component';

describe('PhonebookEntryEditorComponent', () => {
  let component: PhonebookEntryEditorComponent;
  let fixture: ComponentFixture<PhonebookEntryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookEntryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
