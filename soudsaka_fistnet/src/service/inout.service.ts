import { Injectable } from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InoutService  extends APIService {

  public params: any = {};
  private url: string = this.getBaseUrl();
  public token = '';
  
  checkin(param:any):Observable<any> {
    const header = this.headerBase('checkin');
    return this.http.post(this.url + '/service.api.php', param,{headers:header});
  }
  checkout(param:any):Observable<any> {
    const header = this.headerBase('checkout');
    return this.http.post(this.url + '/service.api.php', param,{headers:header});
  }
 


}