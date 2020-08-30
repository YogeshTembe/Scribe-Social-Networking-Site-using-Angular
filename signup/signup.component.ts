import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {AuthService} from '../auth.service';
import { format } from 'url';
import { userInfo } from 'os';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myform: FormGroup;
userError: any;
message: string="";
  constructor( public fb: FormBuilder,public authService:AuthService) {
    this.myform=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
    },
    {
      validator : this.checkIfMatchingPasswords("password","confirmPassword")
    })
   }

   checkIfMatchingPasswords(passwordkey:string,confirmpasswordkey:string){
     return (group: FormGroup) =>{
       let password = group.controls[passwordkey];
      let confirmPassword = group.controls[confirmpasswordkey];
      if(password.value ==confirmPassword.value ){
        return;
      }
      else{
        confirmPassword.setErrors({
          notEqualToPassword : true
        })
      }
     }

   }
   onSubmit(signupform){
    let email:string = signupform.value.email;
    let password:string = signupform.value.password;
    let firstName:string = signupform.value.firstName;
    let lastName:string = signupform.value.lastName;
    this.authService.signup(email,password,firstName,lastName)
    .then((user:any) =>
    {
      firebase.firestore().collection("users").doc(user.uid).set({
        firstName: signupform.value.firstName,
        lastName: signupform.value.lastName,
        email: signupform.value.email,
        photoURL: user.photoURL,
        interests:"",
        bio: "",
        hobbies: ""
      }).then(()=>
      {
        this.message="signed up succesfully please login to continue";

      })
      
    }).catch((error)=>
    {
      console.log(error);
      this.userError=error;
    })
  }
  ngOnInit() {
  }

}
