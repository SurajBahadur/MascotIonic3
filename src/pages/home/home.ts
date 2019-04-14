import { Component, ViewChild } from '@angular/core';
import { App, NavController, Platform, Nav } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { OrderPlacementPage } from '../order-placement/order-placement';
import { OrderSummaryPage } from '../order-summary/order-summary';
import { AboutUsPage } from '../about-us/about-us';
import { ContactUsPage } from '../contact-us/contact-us';
import { CallUsPage } from '../call-us/call-us';
import { ChangePasswordPage } from '../change-password/change-password';
import { DashboardPage } from '../dashboard/dashboard';
import { NotificationPage } from '../notification/notification';
import { AccountPage } from '../account/account';
import { BillWisePage } from '../bill-wise/bill-wise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = DashboardPage;
  pages: Array<{title: string, component: any}>

  constructor(public navCtrl: NavController) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'MTM Order Placement', component: OrderPlacementPage },
      { title: 'MTM Order Summary', component: OrderSummaryPage },
      { title: 'Notification', component: NotificationPage },
      { title: 'Full Account', component: AccountPage },
      { title: 'Bill Wise', component:BillWisePage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Contact Us', component: ContactUsPage },
      { title: 'Call Us', component: CallUsPage },
      { title: 'Change Password', component: ChangePasswordPage },
      { title: 'Sign Out', component: OrderPlacementPage }
    ];
  }

  openPage(page) {
    if(page.title=="Sign Out"){
        
    }else{
      this.nav.push(page.component);
    }
  }

}
