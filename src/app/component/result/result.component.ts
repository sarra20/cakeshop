import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() saleInput: any;
  allartical :any;
  constructor() { }

  ngOnInit() {
    
      this.allartical = [{ date: 1,titre:'anniversaire',descrption:'anniversaire'},
      { date: 1,titre:'mariage',descrption:'mariage'},
      { date: 1,titre:'séminaire',descrption:'seminaire'}
      ]
    

  }
}
