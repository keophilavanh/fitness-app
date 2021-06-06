import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService  extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';



  reportservice(param:any):Observable<any> {
    const header = this.headerBase('reportservice');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }


  reportmemberstart(param:any):Observable<any> {
    const header = this.headerBase('reportmemberstart');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }

  reportmemberend(param:any):Observable<any> {
    const header = this.headerBase('reportmemberend');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }



}
