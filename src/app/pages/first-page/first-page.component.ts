import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  mas = Array<number>(10);
  sortedMas = Array<number>(10);
  history = Array<Array<number>>();
  constructor(
    private router: Router 
  ) {
   }

  ngOnInit(): void {
      let temp = sessionStorage.getItem('history');
      if(temp !== null){
        this.history = JSON.parse(temp)
      }
  }
  Calculate(){
  this.sortedMas = JSON.parse(JSON.stringify(this.mas));
  for(let i =0; i<this.sortedMas.length; i++){
    this.sortedMas[i] = Number.parseInt(this.sortedMas[i].toString());
  }
  let value= '';
  ({sortedMas:this.sortedMas,value:value}  = this.SortMasive(this.sortedMas));
  this.history.push(this.sortedMas);
  sessionStorage.setItem('history',JSON.stringify(this.history));
  }
 SortMasive(sortedMas:any){
   let value = 'jilhpoi';
  for(let i = 0; i<this.sortedMas.length; i++ ){
    for(let y = 0; y<this.sortedMas.length; y++ ){
    if(this.sortedMas[y] > this.sortedMas[y+1]){
      let temp = this.sortedMas[y];
      this.sortedMas[y] = this.sortedMas[y+1];
      this.sortedMas[y+1]=temp;
    }
    } 
  } 
   return {sortedMas,value};
 }
 GoHistory(){
    this.router.navigate(['/history']);
  }
}

