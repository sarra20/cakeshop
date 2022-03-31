import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-display-sale',
  templateUrl: './display-sale.component.html',
  styleUrls: ['./display-sale.component.css']
})
export class DisplaySaleComponent implements OnInit {
  id: any;
  sale: any;
  constructor(private activatedRoute:ActivatedRoute,private saleService:SaleService) { }

  ngOnInit() {this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.saleService.getSaleById(this.id).subscribe(
    (data)=> {
      this.sale = data.result;
    }
  );
}
  }


