import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WebServiceProvider } from '../../providers/web-service/web-service';

/**
 * Generated class for the OrderSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html',
})
export class OrderSummaryPage {
  orderList:Array<any>;
  loading:any;
  response:any;
  orderSummaryList:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public provider:WebServiceProvider,
    public toastCtrl:ToastController,
    public storage:Storage) {

    this.orderList = [
    {image: 'assets/imgs/test.png', title: 'INDO WESTERN'},
	  {image: 'assets/imgs/test.png', title: 'SHERWANI'},
	  {image: 'assets/imgs/test.png', title: 'SUIT'},
	  {image: 'assets/imgs/test.png', title: 'JODHPURI'},
	  {image: 'assets/imgs/test.png', title: 'KURTA'},
	  {image: 'assets/imgs/test.png', title: 'JACKET SUIT'},
	  {image: 'assets/imgs/test.png', title: 'SHERWANI'},
	  {image: 'assets/imgs/test.png', title: 'SUIT'},
	  {image: 'assets/imgs/test.png', title: 'JODHPURI'},
	  {image: 'assets/imgs/test.png', title: 'KURTA'}
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSummaryPage');
    console.log();
    this.getMtmSummaryList();
  }

  getMtmSummaryList(){
      
    this.loading=this.loadingCtrl.create({
      spinner:'bubbles',
      content:`Please wait..`
    });
    this.loading.present();

    this.provider.getMtmSummary(894).subscribe(
      data=>{
        this.response=data;
        this.orderSummaryList=this.response.Order
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
