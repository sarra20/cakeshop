import { Component, OnInit } from '@angular/core';
import { SucreService } from '../services/sucre.service';

@Component({
  selector: 'app-sucre',
  templateUrl: './sucre.component.html',
  styleUrls: ['./sucre.component.css']
})
export class SucreComponent implements OnInit {
  sucres: any = [];
  title: string;
  constructor(private sucreService:SucreService ) { }

  ngOnInit() {this.sucreService.getAllsucres().subscribe(
    (data) => {
      console.log('Here data from BE', data);
      this.sucres = data.result;
      this.title = data.message;
    }
  );
  }
  }

