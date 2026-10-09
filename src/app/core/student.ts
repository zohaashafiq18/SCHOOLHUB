import { Injectable, signal, computed } from '@angular/core';

export interface Student {
  name: string;
  fatherName: string;
  className: string;
  rollNumber: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class StudentService {
  students = signal<Student[]>([
    { name: 'Ali', fatherName: 'Ahmed Khan', className: '5A', rollNumber: 101, status: 'Active' },
    { name: 'Ahmed', fatherName: 'Imran Khan', className: '5B', rollNumber: 102, status: 'Active' },
    { name: 'Zoha Shafiq', fatherName: 'Shafiq Ahmed', className: '12th', rollNumber: 1001, status: 'Active' },
    { name: 'Sarah Khan', fatherName: 'Imran Khan', className: '9th', rollNumber: 1030, status: 'Inactive' },
  ]);

  total = computed(() => this.students().length);
  active = computed(() => this.students().filter(s => s.status === 'Active').length);

  add(student: Student) {
    this.students.update(list => [student, ...list]);
  }

  update(oldStudent: Student, updated: Student) {
    this.students.update(list => list.map(s => (s === oldStudent ? updated : s)));
  }

  remove(student: Student) {
    this.students.update(list => list.filter(s => s !== student));
  }
}