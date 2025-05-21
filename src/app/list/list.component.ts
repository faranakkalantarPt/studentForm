import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {StudentModel} from '../student-model';
@Component({
  selector: 'app-list',
  imports: [CommonModule, TableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  // students = [
  //   {
  //     firstName: '',
  //     lastName: '',
  //     tel: '',
  //     studentNumber: '',
  //     birthday: ''
  //   }
  // ];
  students:StudentModel[]=[]
}
