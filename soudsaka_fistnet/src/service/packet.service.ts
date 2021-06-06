import { Injectable } from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacketService  extends APIService {

  public params: any = {};
  private url: string = this.getBaseUrl();
  public token = '';
  
  addpackage(param:any):Observable<any> {
    const header = this.headerBase('addpackage');
    return this.http.post(this.url + '/package.api.php', param,{headers:header});
  }
  updatepackage(param:any):Observable<any> {
    const header = this.headerBase('updatepackage');
    return this.http.post(this.url + '/package.api.php', param,{headers:header});
  }
  deletepackage(param:any):Observable<any> {
    const header = this.headerBase('deletepackage');
    return this.http.post(this.url + '/package.api.php', param,{headers:header});
  }  
  packagelist(param:any):Observable<any> {
    const header = this.headerBase('packagelist');
    return this.http.post(this.url + '/package.api.php', param,{headers:header});
  }
  getpackage(param:any):Observable<any> {
    const header = this.headerBase('getpackage');
    return this.http.post(this.url + '/package.api.php', param,{headers:header});
  }


}