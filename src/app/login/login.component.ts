import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
import { LoginService } from '../loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm !:FormGroup
  service:any;
  constructor(private formBuilder : FormBuilder,private loginservice: LoginService, private http : HttpClient, private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
    this.service=this.loginservice;
  }
  login(){
    this.http.get<any>("http://localhost:3000/MyUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("You are Successfully Logged in!");
         this.loginservice.changeMessage(user)
        this.loginForm.reset();
        this.router.navigate(['budgethome'])
      }else{
        alert("User not Found!")
      }
    },err=>{
      alert("Something went Wrong!")
    })
  }
  

}