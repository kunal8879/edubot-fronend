import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UnansweredQuestionsComponent } from './unanswered-questions/unanswered-questions.component';
import { MoodleComponent } from './moodle/moodle.component';

const routes: Routes = [
  // { path: '', redirectTo: '/user-list', component: UserListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'unanswered-questions', component: UnansweredQuestionsComponent},
  { path: '', pathMatch: 'full', component: MoodleComponent },
  { path: '**', pathMatch: 'full', component: MoodleComponent }
  // { path: '', redirectTo: '/users', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
