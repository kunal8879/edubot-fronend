import { Component, OnInit } from '@angular/core';
import { ChatbotServiceService } from './chatbot-service.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{

  userPreviousMessage: string[] = [];
  previousResponse: string[] = [];

  userMessage!: string;
  response!: string;

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    this.userPreviousMessage.push('Hi');
    this.previousResponse.push('Hello');
    this.userPreviousMessage.push('How are you?');
    this.previousResponse.push('I am fine');
    this.previousResponse.push('what about you?');
    this.userPreviousMessage.push('I am fine');
    this.previousResponse.push('Great');
  }

  getResponse() {
    console.log(this.userMessage);
    this.userPreviousMessage.push(this.userMessage);
  }

}