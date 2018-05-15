import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookPageComponent } from './phonebook-page.component';

describe('PhonebookPageComponent', () => {
  let component: PhonebookPageComponent;
  let fixture: ComponentFixture<PhonebookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
