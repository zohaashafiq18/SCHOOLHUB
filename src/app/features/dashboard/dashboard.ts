import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  totalStudents = 120;
  totalClasses = 8;
  activeStudents = 115;

  adminName = 'Admin';

}