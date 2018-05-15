import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookEntryModel } from '../phonebook-entry-model';
import { PhonebookAPIService } from '../phonebook-api.service';

@Component({
  selector: 'app-phonebook-entry-editor',
  templateUrl: './phonebook-entry-editor.component.html',
  styleUrls: ['./phonebook-entry-editor.component.css']
})
export class PhonebookEntryEditorComponent implements OnInit {

  private _editMode = false;
  private _editId: string;
  public model: PhonebookEntryModel;
  public submitError: any = null;

  constructor(private _phonebookAPI: PhonebookAPIService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this._editMode = paramMap.has('id');
      this._editId = paramMap.get('id');

      if (this._editMode) {
        this._phonebookAPI.getEntry(this._editId).subscribe((entry) => {
          this.model = entry;
        }, (error) => {
          this._router.navigate(['']);
        });
      } else {
        this.model = new PhonebookEntryModel();
      }
    });
  }

  ngOnInit() {
  }

  submitForm() {
    if (this._editMode) {
      this._phonebookAPI.editEntry(this.model, this._editId).subscribe(() => {
        this._router.navigate(['']);
      }, (err) => {
        this.submitError = err;
      });
    } else {
      this._phonebookAPI.addEntry(this.model).subscribe(() => {
        this._router.navigate(['']);
      }, (err) => {
        this.submitError = err;
      });
    }
  }

}
