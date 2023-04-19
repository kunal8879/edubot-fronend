import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnansweredQuestionService {
  
  apiUrl = 'http://18.234.211.103:8000/unanswered_questions'

  constructor(private http: HttpClient) { }

  getUnansweredQuestion(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

}
