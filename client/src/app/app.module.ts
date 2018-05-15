import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookPageComponent } from './phonebook-page/phonebook-page.component';
import { PhonebookEntryComponent } from './phonebook-entry/phonebook-entry.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PhonebookEntryEditorComponent } from './phonebook-entry-editor/phonebook-entry-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookPageComponent,
    PhonebookEntryComponent,
    PhonebookListComponent,
    PhonebookEntryEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
