import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SucreService } from '../services/sucre.service';


@Component({
  selector: 'app-display-sucre',
  templateUrl: './display-sucre.component.html',
  styleUrls: ['./display-sucre.component.css']
})
export class DisplaySucreComponent implements OnInit {
  id: any;
  sucre: any;
  

  constructor(private activatedRoute:ActivatedRoute,private sucreService:SucreService) { }

  ngOnInit() {this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.sucreService.getsucreById(this.id).subscribe(
    (data)=> {
      this.sucre = data.result;
    }
  );
}
}
