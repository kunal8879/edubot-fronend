import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatbotServiceService, Message } from './chatbot-service.service';
import { MessageModel } from '../models/chatbot_response';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  // @ViewChild('chat-box') chatBox: any;

  messages: MessageModel[] = [];
  value: string = '';
  isLoading: boolean = true;
  showDelay = new FormControl(700);
  chatBox: any = document.getElementsByClassName('messages');

  constructor(private chatbotServiceService: ChatbotServiceService) { }

  ngOnInit(): void {
    this.messages.push(new MessageModel('bot', 'Hello, I am your personal assistant. How can I help you?', new Date().toString().split(' ')[4]));
    this.isLoading = false;
  }

  sendMessage() {
    if (this.value.trim() != '') {
      this.isLoading = true;
      let currentTime: string = new Date().toString().split(' ')[4];
      let messageModel = new MessageModel('user', this.value, currentTime);
      this.messages.push(messageModel);
      console.log(messageModel);
      this.value = '';
      this.chatBox.scrollTop = this.chatBox.scrollHeight;
      this.chatbotServiceService.getBotMessage(messageModel).subscribe((val) => {
        console.log(val);
        this.messages.push(val);
        this.isLoading = false;
        
      });
    }
  }
}