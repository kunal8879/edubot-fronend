import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoodleComponent } from './moodle/moodle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edu-bot-frontend';
  isShow : boolean = true;
  hideComponent() {
    this.isShow = false;
  }
}
