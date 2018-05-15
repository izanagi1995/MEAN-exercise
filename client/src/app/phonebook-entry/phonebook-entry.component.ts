import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PhonebookEntryModel } from '../phonebook-entry-model';

@Component({
  selector: 'app-phonebook-entry',
  templateUrl: './phonebook-entry.component.html',
  styleUrls: ['./phonebook-entry.component.css']
})
export class PhonebookEntryComponent implements OnInit {

  @Input() entry: PhonebookEntryModel;

  @Output() edit = new EventEmitter<PhonebookEntryModel>();
  @Output() delete = new EventEmitter<PhonebookEntryModel>();

  constructor() { }

  ngOnInit() {
  }

  triggerEdit() {
    this.edit.emit(this.entry);
  }

  triggerDelete() {
    this.delete.emit(this.entry);
  }

}
