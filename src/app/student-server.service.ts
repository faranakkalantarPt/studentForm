import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from './student-model';

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  tel: string;
  studentNumber: string;
  birthday: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentServerService {
  private apiUrl = "";
  constructor(private http: HttpClient) {
  }

  // گرفتن همه دانش‌آموزها
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // اضافه‌کردن دانش‌آموز جدید
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

// حذف دانش‌آموز
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // ویرایش دانش‌آموز
  updateStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`,student)
  }
}
