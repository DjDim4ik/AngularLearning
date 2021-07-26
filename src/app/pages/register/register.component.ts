import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { DOCUMENT } from '@angular/common';

  @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  a = true;
  b = false;
  login = '';
  password = '';
  Update =new Array<any>();
  constructor(
    private router: Router 
    ) {
   }

  ngOnInit(): void {
    
    console.log(this.login);
    
  }
  GoUser(myForm: NgForm){
    console.log(myForm);
    console.log("__________________elementbyID - verific_____________");
    let uid = (document.getElementById("loginId") as HTMLInputElement);
      console.log();
      if(this.userid_validation(uid,5,12))
      {
        uid.oninvalid
      }
    if(this.b){
      let UpdateTemp;
      let Update = [];
      this.router.navigate(['/user']);
      UpdateTemp = sessionStorage.getItem("LogMas");
      if(UpdateTemp == null){
        this.Update.push(this.login);
      }else if(UpdateTemp !== null){
      UpdateTemp = JSON.parse(UpdateTemp);
      this.Update = UpdateTemp;
      this.Update.push(this.login);
      sessionStorage.setItem('LogMas', JSON.stringify(this.Update));

      
// var passid = document.registration.passid;
// var uname = document.registration.username;
// var uadd = document.registration.address;
// var ucountry = document.registration.country;
// var uzip = document.registration.zip;
// var uemail = document.registration.email;
// var umsex = document.registration.msex;
// var ufsex = document.registration.fsex;
// if(userid_validation(uid,5,12))
// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// { 
// if(countryselect(ucountry))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// if(validsex(umsex,ufsex))
// {
// }
// } 
// }
// } 
// }
// }
// }
// }
// return false;
      }
    }
  }
  userid_validation(uid:any,mx:any,my:any){
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len>= my || uid_len<mx){
      alert("User Id should not be empty / length be between "+mx+" to "+my);
      uid.focus();
      return false;
    }
    return true;
}

  

}