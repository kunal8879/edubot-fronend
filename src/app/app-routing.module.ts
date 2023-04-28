import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user_list.component';
import { UnansweredQuestionsComponent } from './unanswered_questions/unanswered_questions.component';
import { MoodleComponent } from './moodle/moodle.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'user_list', component: UserListComponent },
  { path: 'unanswered_questions', component: UnansweredQuestionsComponent},
  { path: '**', pathMatch: 'full', component: MoodleComponent },
  { path: 'menu', pathMatch: 'full', component: LoginComponent },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
