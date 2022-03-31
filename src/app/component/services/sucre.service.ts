import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SucreService {

  SucreURL: string = "http://localhost:3000/sucres";
  constructor(private httpClient: HttpClient) { }

  getAllsucres() {
    return this.httpClient.get<{ message: string, result: any }>(this.SucreURL);
  }

  addsucre(Sucre: any) {
    return this.httpClient.post<{ message: string }>(this.SucreURL, Sucre);
  }

  getsucreById(id) {
    // return this.httpClient.get(this.sucreURL + "/" + id);
    return this.httpClient.get<{ message: string, result: any }>(`${this.SucreURL}/${id}`);
  }

  deletesucre(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SucreURL}/${id}`);
  }

  editsucre(Sucre) {
    return this.httpClient.put<{ message: string }>(`${this.SucreURL}/${Sucre._id}`, Sucre)
  }

}
