import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucreService } from '../services/sucre.service';

@Component({
  selector: 'app-admin-sucre',
  templateUrl: './admin-sucre.component.html',
  styleUrls: ['./admin-sucre.component.css']
})
export class AdminSucreComponent implements OnInit {

  sucres: any = [];
  constructor(
    private router: Router,
    private sucreService: SucreService) { }

  ngOnInit() {
    this.sucreService.getAllsucres().subscribe(
      (data) => {
        this.sucres = data.result;
      }
    );
  }

  goToAdd() {
    this.router.navigate(["addsucre"]);
  }

  deletesucre(id) {
    this.sucreService.deletesucre(id).subscribe(
      (data) => {
        console.log('Here data after delete', data.message);
        this.sucreService.getAllsucres().subscribe(
          (data)=> {
            this.sucres = data.result;
          }
        )
      }
    );
  }

  goToDisplay(id) {
    this.router.navigate([`displaysucre/${id}`]);
  }

  goToEdit(id) {
    this.router.navigate([`editsucre/${id}`]);
  }


}
