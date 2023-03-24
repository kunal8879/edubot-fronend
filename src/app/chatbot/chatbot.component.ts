import { Component, OnInit } from '@angular/core';
import { ChatbotServiceService, Message } from './chatbot-service.service';
import { MessageModel } from './model';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{

  messages123: MessageModel[] = [];
  value: string = '';
  isLoading: boolean = true;
  chatbox: any = document.getElementsByClassName('chat-box');

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    
    this.messages123.push(new MessageModel('bot', 'Hello, I am your personal assistant. How can I help you?', new Date().toString().split(' ')[4]));
    this.isLoading = false;
  }

  sendMessage() {
    if(this.value.trim() != '') {
      // this.chatbox.animate({ scrollTop: 20000000 }, "slow")
      // this.chatbox.scrollTo(0, 999);

      this.isLoading = true;
      let currentTime: string = new Date().toString().split(' ')[4];
      
      let messageModel = new MessageModel('user', this.value, currentTime);
      this.messages123.push(messageModel);

      console.log(messageModel);
      this.value = '';

      this.chatbotServiceService.getBotMessage(messageModel).subscribe((val) => {
        console.log(val);
        this.messages123.push(val);
        this.isLoading = false;
      });
    }
  }
}