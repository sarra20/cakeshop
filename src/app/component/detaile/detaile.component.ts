import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.css']
})
export class DetaileComponent implements OnInit {
  @Input() sucreInput: any;
  constructor() { }

  ngOnInit() {}
  

}
