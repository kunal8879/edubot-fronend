import { Injectable, Type } from '@angular/core';
import { Observable, Subject, timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from './model';

export class Message {
  constructor(public author: string, public content: string, public time: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotServiceService {

  apiUrl = 'http://127.0.0.1:8000/edubot'

  constructor(private http: HttpClient) { }

  conversation = new Subject<Message[]>();
  // messageMap = {
  //   "hi": "Hello",
  //   "Who are you": "My name is Test Sat Bot",
  //   "What is your role": "Just guide for the user",
  //   "defaultmsg": "I can't understand your text. Can you please repeat",
  //   "Aaj kamayenga to kal baithake khayenga" : "aa meri jaan..."
  // }

  // getBotAnswer(msg: string): Observable<string> {
  //   const userMessage = new Message('user', msg, new Date().toString().split(' ')[4]);
  //   this.conversation.next([userMessage]);
  //   const botMessage = new Message('bot', this.getBotMessage(msg), new Date().toString().split(' ')[4]);
  //   setTimeout(() => {
  //     this.conversation.next([botMessage]);
  //   }, 1500);
  // }

  // getBotMessage(question: string) {
  //   let answer : any = this.messageMap[question as keyof typeof this.messageMap];
  //   return answer || this.messageMap['defaultmsg'];
  // }

  getBotMessage(model: MessageModel): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}`, model, {
    //   responseType: 'text' as 'json'
    // });
    return this.http.post<any>(`${this.apiUrl}`, model);
  }

}
