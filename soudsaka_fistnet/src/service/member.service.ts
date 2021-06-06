import { Injectable } from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService  extends APIService {

  public params: any = {};
  private url: string = this.getBaseUrl();
  public token = '';
  
  addmember(param:any):Observable<any> {
    const header = this.headerBase('addmember');
    return this.http.post(this.url + '/member.api.php', param,{headers:header});
  }
  updatemember(param:any):Observable<any> {
    const header = this.headerBase('updatemember');
    return this.http.post(this.url + '/member.api.php', param,{headers:header});
  }
  deletemember(param:any):Observable<any> {
    const header = this.headerBase('deletemember');
    return this.http.post(this.url + '/member.api.php', param,{headers:header});
  }  
  memberlist(param:any):Observable<any> {
    const header = this.headerBase('memberlist');
    return this.http.post(this.url + '/member.api.php', param,{headers:header});
  }
  getmember(param:any):Observable<any> {
    const header = this.headerBase('getmember');
    return this.http.post(this.url + '/member.api.php', param,{headers:header});
  }


}