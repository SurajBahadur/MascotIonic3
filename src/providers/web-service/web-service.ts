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

  /**
   * http://mascot.asnasoftwaresolution.com/specialApi.aspx?CUSTCODE=894
   * @param customerCode 
   */
  public getMtmSummary(customerCode){
    console.log(this.apiUrl+'specialApi.aspx?CUSTCODE='+customerCode)
    return this.http.get(this.apiUrl+'specialApi.aspx?CUSTCODE='+customerCode);
  }

  /**
   * http://mascot.asnasoftwaresolution.com/colourapi.aspx?design=9032 
   */
  public getColorList(code){
    return this.http.get(this.apiUrl+'colourapi.aspx?design='+code);
  }



  /**
   * http://mascot.asnasoftwaresolution.com/savespecialapi.aspx
   *http://mascot.asnasoftwaresolution.com/saveSpecial1Api.aspx?CUSTCODE=893&PRODUCT=1001&COLOUR=WHITE&REMARK=NA&REFNO=111&del_date=10-10-2019
   &chest=1&W=1&hip=1&sh=1&sl=1&l=1&n=1&b=1&others=na&picname=noimage.jpg
   */
  public saveOrder(order,picImage,custCode,date){
   console.log(order)
   return this.http.get(this.apiUrl+'savespecial1api.aspx?CUSTCODE='+custCode+'&PRODUCT='+order.design_no+'&COLOUR='+order.color
  +'&REMARK='+order.remarks+'&REFNO='+order.ref_no+'&del_date='+date+'&chest='+order.chest+'&W='+order.waist+'&hip='+order.hip
  +'&sh='+order.shoulder+'&sl='+order.sleeves+'&l='+order.length+'&n='+order.neck+'&others='+order.other_specification+'&picname='+picImage
  );
  }


  public getOrderDetail(orderId,custCode){
    console.log(this.apiUrl+'specialdetailApi.aspx?CUSTCODE='+custCode+'&ORDERID='+orderId);
    return this.http.get(this.apiUrl+'specialdetailApi.aspx?CUSTCODE='+custCode+'&ORDERID='+orderId);
  }

  public orderImageUpload(){
    // var param = data;
    // var headers = new Headers();
    // headers.append('content-type','multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
    // headers.append('Authorization','Bearer ' + token);
    // let options = new RequestOptions({ headers: headers, withCredentials: true });
    // return new Promise((response,error)=>{
    //   this.http.post(url,param,options)
    //   .subscribe( (res) => {
    //     console.log(res);
    //     response(res);
    //   },(err) => {
    //     error(err);
    //   });
    // });

  }

}
