import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private RouterObj: Router , private RestServiceObj: RestService) { }

  ngOnInit(): void {
    //this.readData();
  }

  // @Output() messageToEmit = new EventEmitter();
  // bLoadHome = "false";

  //arrUsers: User[] = [];          //stores the users list

  // readData(){

  //   // this.RestServiceObj.getUsers().subscribe(
  //   //   (data) =>{
  //   //     this.arrUsers = data;
  //   //   },

  //   //   (error) =>{
  //   //     console.log(error);
  //   //   }
  //   // );
  
  // }

  id:number = 0;
  name:string = "";
  email:string = "";
  password:string = "";
  
  loadHome(){

    this.RestServiceObj.getUser(this.email, this.password).subscribe(
      (data)=>{
        console.log(data);
        if(data == "valid user"){

          let strUrlForPolicies = "policies";
          this.RouterObj.navigate([strUrlForPolicies]);
          // alert("Valid User!");

          // this.email = "",
          // this.password = ""
        }
        else{
          alert("Invalid User credentials!");

          this.email = "",
          this.password = ""
        }
      },

      (error)=>{
        console.log(error);
      }
    );
 
  }

  loadSignup(){
    let strUrlForSignup = "signup";
    this.RouterObj.navigate([strUrlForSignup]);
  }

  loadSignupGitHub(){
    // // this.bGoogle = "true";
    // let strUrlForSignup = "signupGitHub";
    // this.RouterObj.navigate([strUrlForSignup]);
  }

}
