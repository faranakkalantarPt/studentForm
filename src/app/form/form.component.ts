import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule ,TableModule],
  templateUrl: './form.component.html',
  standalone: true,
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      studentId: new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      birthDate:new FormControl('',[Validators.required])
    })
    }
    myArray:string[]=['item1','item2'];
  studentForm:FormGroup;
  ngOnInit():void {
  }
  add(){
    let logs:string[]=[];
    const formValues=this.studentForm.value;
    logs.push(formValues);
    console.log('student',logs);
    this.myArray=[...logs];

    if (this.studentForm.valid){
      console.log(this.studentForm.valid)
      this.studentForm.reset();
      }
    }
  }

