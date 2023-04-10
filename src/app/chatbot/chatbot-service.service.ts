import { Injectable, Type } from '@angular/core';
import { Observable, Subject, timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../models/chatbot_response';

export class Message {
  constructor(public author: string, public content: string, public time: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotServiceService {

  apiUrl = 'http://127.0.0.1:8000/edubot'

  constructor(private http: HttpClient) { }

  getBotMessage(Model: MessageModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Model);
  }

}
