import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  data:Array<any>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage:Storage,
    public menuCtrl:MenuController
  ) {

    this.data = [
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
    console.log('ionViewDidLoad DashboardPage');
    this.storage.get('cust_response').then((val)=>{
      console.log("rest",val)
    })
  }

  openMenu() {
    console.log("menu");
    this.menuCtrl.open();
  }

}
