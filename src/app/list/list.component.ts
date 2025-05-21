import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
@Component({
  selector: 'app-list',
  imports: [TableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true
})
export class ListComponent{
  students = [
    {
      firstName: '',
      lastName: '',
      tel: '',
      studentNumber: '',
      birthday: ''
    }
  ]

}
