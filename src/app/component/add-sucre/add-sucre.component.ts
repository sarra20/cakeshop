import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SucreService } from '../services/sucre.service';

@Component({
  selector: 'app-add-sucre',
  templateUrl: './add-sucre.component.html',
  styleUrls: ['./add-sucre.component.css']
})
export class AddSucreComponent implements OnInit {
  i: any;
  sucre: any = {};
  addSucreForm: FormGroup;
  id: any;
  title: string = "Add Sucre"
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private SucreService: SucreService) { }

  

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = "Edit Sucre"
      this.SucreService.getsucreById(this.id).subscribe(
        (data) => {
          this.sucre = data.result;
        }
      );
     
    }
    this.addSucreForm = this.formBuilder.group({
      nomProduit: [''],
      quantite: [''],
      type:[''],
      prix: ['']
    });
  }
  addOrEditSucre() {
    if (this.id) {
      // traitement edit
      this.SucreService.editsucre(this.sucre).subscribe(
        (data) => {
          console.log('Here data after edit', data.message);
        }
      );
    } else {
      // traitement add
      this.SucreService.addsucre(this.sucre).subscribe(
        (data) => {
          console.log('Here data from BE', data.message);
        }
      );
    }
    this.router.navigate(['admin']);
  }

}
