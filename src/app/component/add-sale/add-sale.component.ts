import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {
  i: any;
  sale: any = {};
  addSaleForm: FormGroup;
  id: any;
  title: string = "Add Sale"
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private SaleeService: SaleService) { }

  

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = "Edit Salé"
      this.SaleeService.getSaleById(this.id).subscribe(
        (data) => {
          this.sale = data.result;
        }
      );
     
    }
    this.addSaleForm = this.formBuilder.group({
      nomProduit: [''],
      quantite: [''],
      prix: ['']
    });
  }
  addOrEditSale() {
    if (this.id) {
      // traitement edit
      this.SaleeService.editSale(this.sale).subscribe(
        (data) => {
          console.log('Here data after edit', data.message);
        }
      );
    } else {
      // traitement add
      this.SaleeService.addSale(this.sale).subscribe(
        (data) => {
          console.log('Here data from BE', data.message);
        }
      );
    }
    this.router.navigate(['admin']);
  }
}
