import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookPageComponent } from './phonebook-page/phonebook-page.component';
import { PhonebookEntryEditorComponent } from './phonebook-entry-editor/phonebook-entry-editor.component';
const routes: Routes = [{
  component: PhonebookPageComponent,
  path: ''
}, {
  component: PhonebookEntryEditorComponent,
  path: 'editor',
}, {
  component: PhonebookEntryEditorComponent,
  path: 'editor/:id',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
