import { Component, OnInit } from '@angular/core';
import { ChatbotServiceService, Message } from './chatbot-service.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{

  messages: Message[] = [];
  value: string = '';
  isLoading: boolean = true;

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    this.chatbotServiceService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
    this.messages.push(new Message('bot', 'Hello, I am Test Bot. How can I help you?', new Date().toString().split(' ')[4]));
    this.isLoading = false;
  }

  sendMessage() {

    if(this.value.trim() != '') {
      this.isLoading = true;
      console.log(this.isLoading);
      this.chatbotServiceService.getBotAnswer(this.value);
      this.value = '';
      setTimeout(() => { this.isLoading = false; }, 1500);
    }
    console.log(this.isLoading);
    
  }

}