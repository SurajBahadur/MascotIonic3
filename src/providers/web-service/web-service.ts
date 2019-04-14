import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';


@Injectable()
export class WebServiceProvider {

  apiUrl=this.appsetting.getApiURL();
  
  constructor(public http: HttpClient,public appsetting: AppSetting) {
  	this.http=http;

  }

  /**
   * http://mascot.asnasoftwaresolution.com/userapi.aspx?USERNAME=9819463835&PASSWORD=123&CUSTCODE
   */
  public doLogin(userName,password){
    return this.http.get(this.apiUrl+'userapi.aspx?USERNAME='+userName+'&'+'PASSWORD='+password+'&CUSTCODE')
  }

}
