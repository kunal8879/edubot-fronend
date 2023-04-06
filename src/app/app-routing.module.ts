import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UnansweredQuestionsComponent } from './unanswered-questions/unanswered-questions.component';
import { MoodleComponent } from './moodle/moodle.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent},
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent},
  // {path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'user-list', component: UserListComponent },
  // {path: '', redirectTo: '/user-list', pathMatch: 'full'},
  { path: 'unanswered-questions', component: UnansweredQuestionsComponent},
  // {path: '', redirectTo: '/unanswered-questions', pathMatch: 'full'},
  // { path: '', redirectTo: '/users', pathMatch: 'full' }


  // { path: '', redirectTo: '/', component: MoodleComponent, pathMatch: 'full' }

  // { path: 'users', component: UserListComponent },
  // { path: 'unanswered-questions', component: UnansweredQuestionsComponent },
  // { path: '', pathMatch: 'full', component: MoodleComponent },
  { path: '**', pathMatch: 'full', component: MoodleComponent },
  { path: 'menu', pathMatch: 'full', component: LoginComponent },
  // { path: '', redirectTo: '/menu', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
