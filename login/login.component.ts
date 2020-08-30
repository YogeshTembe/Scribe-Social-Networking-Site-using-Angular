import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform:FormGroup;
  message: string="";
  userError: any;

  constructor(public fb:FormBuilder,public authService:AuthService,public router:Router) 
  {
    this.myform=this.fb.group({
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.required]]
    })
   }
   onSubmit(form){
     this.authService.login(form.value.email,form.value.password).then((data)=>{
       this.message="you have been successfully logged in";
       this.router.navigate(['/myblogs']);
     
     }).catch((error)=>
     {
       console.log(error);
       this.userError=error;
     })
   }

  ngOnInit() {
  }

}
