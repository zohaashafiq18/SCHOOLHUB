import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-card',
  imports: [FormsModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  studentName = 'Ali Khan';
  fatherName = 'Ahmed Khan';
  studentClass = '5th';
  rollNumber = 12;
  status = 'Active';
  imageUrl = 'https://i.pravatar.cc/150?img=5';
  message = '';

  save() {
    this.message = this.studentName + ' ka data save ho gaya!';
  }
}