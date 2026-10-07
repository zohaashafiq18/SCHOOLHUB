import { Component } from '@angular/core';
import { StudentCard } from './student-card/student-card';

@Component({
  selector: 'app-students',
  imports: [StudentCard],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {}