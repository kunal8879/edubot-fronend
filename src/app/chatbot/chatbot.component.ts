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

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    this.chatbotServiceService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
    this.messages.push(new Message('bot', 'Hello, I am Test Bot. How can I help you?', new Date().toString().split(' ')[4]));
  }

  sendMessage() {
    if(this.value.trim() != '') {
      this.chatbotServiceService.getBotAnswer(this.value);
      this.value = '';
    }
  }

  // getResponse() {
  //   console.log(this.userMessage);
  //   this.userPreviousMessage.push(this.userMessage);
  // }

}