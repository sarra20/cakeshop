import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-admin-sale',
  templateUrl: './admin-sale.component.html',
  styleUrls: ['./admin-sale.component.css']
})
export class AdminSaleComponent implements OnInit {

  sales: any = [];
  constructor(
    private router: Router,
    private saleService: SaleService) { }

  ngOnInit() {
    this.saleService.getAllSales().subscribe(
      (data) => {
        this.sales = data.result;
      }
    );
  }

  goToAdd() {
    this.router.navigate(["addsale"]);
  }

  deletesale(id) {
    this.saleService.deleteSale(id).subscribe(
      (data) => {
        console.log('Here data after delete', data.message);
        this.saleService.getAllSales().subscribe(
          (data)=> {
            this.sales = data.result;
          }
        )
      }
    );
  }

  goToDisplay(id) {
    this.router.navigate([`displaysale/${id}`]);
  }

  goToEdit(id) {
    this.router.navigate([`editsale/${id}`]);
  }


}
