import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  SaleURL: string = "http://localhost:3000/sales";
  constructor(private httpClient: HttpClient) { }

  getAllSales() {
    return this.httpClient.get<{ message: string, result: any }>(this.SaleURL);
  }

  addSale(Sale: any) {
    return this.httpClient.post<{ message: string }>(this.SaleURL, Sale);
  }

  getSaleById(id) {
    // return this.httpClient.get(this.SaleURL + "/" + id);
    return this.httpClient.get<{ message: string, result: any }>(`${this.SaleURL}/${id}`);
  }

  deleteSale(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SaleURL}/${id}`);
  }

  editSale(Sale) {
    return this.httpClient.put<{ message: string }>(`${this.SaleURL}/${Sale._id}`, Sale)
  }

}
