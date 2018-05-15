import { PhonebookEntryModel } from '../phonebook-entry-model';
import { Observable } from 'rxjs';
import { PhonebookAPIService } from '../phonebook-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhonebookListComponent } from '../phonebook-list/phonebook-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-page',
  templateUrl: './phonebook-page.component.html',
  styleUrls: ['./phonebook-page.component.css']
})
export class PhonebookPageComponent implements OnInit {

  @ViewChild(PhonebookListComponent) phonebookList: PhonebookListComponent;

  entries: Observable<PhonebookEntryModel[]>;
  filterQuery = '';

  constructor(private _phonebookAPI: PhonebookAPIService, private _router: Router) { }

  ngOnInit() {
    this.entries = this._phonebookAPI.getEntries();
  }

  reload() {
    this.entries = this._phonebookAPI.getEntries();
  }

  onKey(event: KeyboardEvent) {
    this.filterQuery = (<HTMLInputElement>event.target).value;
  }

  addEntry() {
    this._router.navigate(['editor']);
  }

}
