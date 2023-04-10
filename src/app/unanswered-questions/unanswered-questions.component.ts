import { Component, OnInit } from '@angular/core';
import { UnansweredQuestion } from '../models/unanswered_question';
import { UnansweredQuestionServiceService } from './unanswered-question-service.service';

@Component({
  selector: 'app-unanswered-questions',
  templateUrl: './unanswered-questions.component.html',
  styleUrls: ['./unanswered-questions.component.css']
})
export class UnansweredQuestionsComponent implements OnInit {

  displayedColumns: string[] = ['Index', 'Questions', 'Time'];
  dataSource: UnansweredQuestion[];
  isLoaded: boolean = false;

  constructor(private unansweredQuestion: UnansweredQuestionServiceService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.getAllUnansweredQuestions();
    this.isLoaded = false;
  }

  getAllUnansweredQuestions() {
    this.unansweredQuestion.getUnansweredQuestion().subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log(this.dataSource);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}