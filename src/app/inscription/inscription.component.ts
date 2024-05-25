import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

  // export class User {
  //   constructor(
  //       public firstName: string,
  //       public lastName: string,
  //       public email: string,
  //       public city: string,
  //       public jobStatus: string,
  //       public phone: number,
  //       public subscribe: boolean
  //   ) { }
  // }
  jobHasError = true;
  jobs = ["Front-end developer", "back-end developer", "Devops", "Data Analytics", "Machine Learning"];
  userModel: User = new User("redwane", "kassou", "kassou.redwane2001@gmail.com", "casablanca", "Front-end developer", 212647340469, false);
  constructor() { }

  validateJobSelect(value: string) {
    if (value == 'choose an option') this.jobHasError = true;
    else this.jobHasError = false;
  }
  ngOnInit(): void {

  }
  onSubmit(): void {

  }
}
