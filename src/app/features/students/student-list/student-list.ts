import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentCard } from '../student-card/student-card';
import { Student, StudentService } from '../../../core/student';

@Component({
  selector: 'app-student-list',
  imports: [StudentCard, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  private studentService = inject(StudentService);

  searchText = '';
  showForm = false;
  editingStudent: Student | null = null;
  form: Student = this.emptyStudent();

  emptyStudent(): Student {
    return { name: '', fatherName: '', className: '', rollNumber: 0, status: 'Active' };
  }

  get filteredStudents(): Student[] {
    const text = this.searchText.toLowerCase();
    return this.studentService
      .students()
      .filter(s => s.name.toLowerCase().includes(text));
  }

  openAdd() {
    this.editingStudent = null;
    this.form = this.emptyStudent();
    this.showForm = true;
  }

  onEdit(student: Student) {
    this.editingStudent = student;
    this.form = { ...student };
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  save() {
    if (!this.form.name.trim()) {
      alert('Student ka naam likhein');
      return;
    }
    if (this.editingStudent) {
      this.studentService.update(this.editingStudent, { ...this.form });
    } else {
      this.studentService.add({ ...this.form });
    }
    this.closeForm();
  }

  onDelete(student: Student) {
    if (confirm('Kya aap ' + student.name + ' ko delete karna chahti hain?')) {
      this.studentService.remove(student);
    }
  }
}