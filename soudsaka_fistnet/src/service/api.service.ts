import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(public http: HttpClient) { }

   
  protected getBaseUrl(): string {
   
  
     return 'http://216.127.173.163/FitnessAPI/api/';
    //  return 'http://192.168.1.10/fitness/api/';
  
  }

  public imageURL(): string {
   
  
    // return 'http://localhost/soudsaka/api/';
      return 'http://216.127.173.163/FitnessAPI/image/';
  
  }

  protected headerBase(m:string=""): any {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('token', token+'')
    .set('m', m)
    .set('database_name','tax_pks')
    ;
    return headers;
  }
}
