import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-moodle',
  templateUrl: './moodle.component.html',
  styleUrls: ['./moodle.component.css']
})
export class MoodleComponent implements OnInit{
  MoodleSubcription : Subscription;
  isShow : boolean = true;
  hideComponent() {
    this.isShow = false;
  }
  working: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}
