import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../loginservice';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent {
  userDetails: any;
  public expenses !: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private login: LoginService)
   {

    this.login.userobs.subscribe((result) => {

      this.userDetails = result;


    });
  }
  ngOnInit(): void {
    this.expenses = this.formBuilder.group({
      expType: [''],
      expValue: ['']
    })
  }
  expenditure() {
    this.userDetails = this.login.userSource.getValue()

    let newexpense = { [this.expenses.value.expType]: [this.expenses.value.expValue] }

    this.userDetails.expenses.push(newexpense)

    if ((this.userDetails.currentexpenditure + this.expenses.value.expValue) > this.userDetails.threshold) {
      alert("You have exceded threshold cannot update")
    }
    else {
      this.userDetails.currentexpenditure = this.userDetails.currentexpenditure + this.expenses.value.expValue
      this.http.put<any>("http://localhost:3000/MyUsers/" + this.userDetails.id, this.userDetails)
        .subscribe(res => {
          alert("You are Successfully added new expense!");
          this.expenses.reset();


        }, err => {
          alert("Something went Wrong!")
        })
    }
  }



}
