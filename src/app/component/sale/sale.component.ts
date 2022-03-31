import { Component, OnInit } from '@angular/core';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  sales: any = [];
  title: string;
  constructor(private saleService:SaleService) { }
  
  ngOnInit() {
  
  this.saleService.getAllSales().subscribe(
    (data) => {
      console.log('Here data from BE', data);
      this.sales = data.result;
      this.title = data.message;
    }
  );
  }

}


