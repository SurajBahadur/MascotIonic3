import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WebServiceProvider } from '../../providers/web-service/web-service';


@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  loading:any;
  response:any;
  orderDetail:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public provider:WebServiceProvider,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');

    this.getOrderDetail(this.navParams.get('orderId'),this.navParams.get('custCode'));
  }


  getOrderDetail(orderId,custCode){
      
    this.loading=this.loadingCtrl.create({
      spinner:'bubbles',
      content:`Please wait..`
    });
    this.loading.present();

    this.provider.getOrderDetail(orderId,custCode).subscribe(
      data=>{
        this.response=data;
        this.orderDetail=this.response.Orderdet
        console.log(this.response);
      },
      err=>{
          this.loading.dismiss();
          this.showToast("Please try again later")
      },

      ()=>{
        this.loading.dismiss();
      }

    )
  }


  showToast(msg:string) {
    let toast = this.toastCtrl.create({
     message: msg,
     duration: 2000,
     position: "bottom"
   });

   toast.present(toast);
 }

}
