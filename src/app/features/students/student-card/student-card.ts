import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../core/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  @Input() student!: Student;

  @Output() edit = new EventEmitter<Student>();
  @Output() delete = new EventEmitter<Student>();
}