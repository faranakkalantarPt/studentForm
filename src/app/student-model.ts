export class StudentModel {
  firstName:string='';
  lastName:string='';
  studentId:string='';
  phone:string='';
birthDate:string='';

}

export function mapToStudentModel(model:any) {
 let mod: StudentModel=new StudentModel()
  mod.firstName=model.firstName;
 mod.lastName=model.lastName;
 mod.studentId=model.studentId;
 mod.phone=model.phone;
 mod.birthDate=model.birthDate;
 return mod;
}
