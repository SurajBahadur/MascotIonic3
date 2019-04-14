import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
  }

}
