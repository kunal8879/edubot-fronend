import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { UnansweredQuestionsComponent } from './unanswered-questions/unanswered-questions.component';
import { MoodleComponent } from './moodle/moodle.component';
import { LoginComponent } from './menu/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    MenuComponent,
    UserListComponent,
    UnansweredQuestionsComponent,
    MoodleComponent,
    LoginComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-3oanhzpgtmwe6zt5.us.auth0.com',
      clientId: '3IuU9LLiQBFMhZ6m4riW8UMmnWIo5x10',
      authorizationParams: {
        redirect_uri: "http://localhost:4200/unanswered-questions"
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // Angular Material imports
    BrowserAnimationsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }