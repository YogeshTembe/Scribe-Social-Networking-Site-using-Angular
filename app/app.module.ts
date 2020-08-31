import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {NgxEditorModule} from 'ngx-editor';
import {HttpClientModule} from '@angular/common/http';
import { LoginmedComponent } from './loginmed/loginmed.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
let config = {
  apiKey: "AIzaSyA-J3ToUkbAfqZaTbfT79y3A3W5-766w30",
  authDomain: "scibe-2efbd.firebaseapp.com",
  databaseURL: "https://scibe-2efbd.firebaseio.com",
  projectId: "scibe-2efbd",
  storageBucket: "scibe-2efbd.appspot.com",
  messagingSenderId: "305888828123",
  appId: "1:305888828123:web:65016da3efbc99b9860afe",
  measurementId: "G-ES19SZQ80H"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    LoginmedComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
