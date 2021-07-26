
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  htmlPost = '';
  Update =new Array<any>();
  constructor() { 
  }

    ngOnInit(): void {
   
      let UpdateTemp;
      
      UpdateTemp = sessionStorage.getItem("LogMas");
      if(UpdateTemp !== null){
      UpdateTemp = JSON.parse(UpdateTemp);
    }
    this.Update = UpdateTemp;
  }
  
    
}
