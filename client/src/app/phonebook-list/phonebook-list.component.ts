import { Component, OnInit, Input } from '@angular/core';
import { PhonebookEntryModel } from '../phonebook-entry-model';
import { PhonebookAPIService } from '../phonebook-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.css']
})
export class PhonebookListComponent implements OnInit {

  @Input() phonebookEntries: Array<PhonebookEntryModel>;
  @Input() filter: string;

  constructor(private _phonebookAPI: PhonebookAPIService, private _router: Router) { }

  ngOnInit() {
  }

  applyFilter(): Array<PhonebookEntryModel> {
    return this.phonebookEntries.filter((entry) => {
      if (this.filter === '') {
        return true;
      }
      return entry.lastName.toLowerCase().includes(this.filter.toLowerCase())
        || entry.firstName.toLowerCase().includes(this.filter.toLowerCase())
        || entry.phoneNumber.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  editEntry(entry: PhonebookEntryModel) {
    this._router.navigate(['editor', entry._id]);
  }

  deleteEntry(entry: PhonebookEntryModel) {
    this._phonebookAPI.deleteEntry(entry._id).subscribe(() => {
      this.phonebookEntries = this.phonebookEntries.filter((current) => current._id !== entry._id);
    });
  }

}
