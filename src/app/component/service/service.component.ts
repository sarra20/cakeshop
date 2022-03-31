import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  infos:any=[];
  title:string;
  constructor() { }

  ngOnInit() {
    this.infos = [{ id: 1,Name:'Name',describe:'name',image:"cake.jpg" },
    { id: 2,Name:'Name',describe:'name',image:"croissants.jpg" },
    { id: 2,Name:'Name',describe:'name',image:"salé.jpg" },
   // { id: 2,Name:'Name',describe:'name',image:"cake.jfif" },
    
    
    
  
]
  }
    
  

}
