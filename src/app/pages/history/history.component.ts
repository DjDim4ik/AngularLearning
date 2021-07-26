import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history = Array<Array<number>>();
  constructor() { }

  ngOnInit(): void {
    let temp = sessionStorage.getItem('history');
    if(temp!=null){
      this.history = JSON.parse(temp);
    }
  }

}
