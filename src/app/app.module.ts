import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AccountPage } from '../pages/account/account';
import { BillWisePage } from '../pages/bill-wise/bill-wise';
import { CallUsPage } from '../pages/call-us/call-us';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { NotificationPage } from '../pages/notification/notification';
import { OrderPlacementPage } from '../pages/order-placement/order-placement';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { ProfilePage } from '../pages/profile/profile';
import { WebServiceProvider } from '../providers/web-service/web-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppSetting } from '../providers/api_route';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    AboutUsPage,
    AccountPage,
    BillWisePage,
    CallUsPage,
    ChangePasswordPage,
    ContactUsPage,
    NotificationPage,
    OrderPlacementPage,
    OrderSummaryPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    AboutUsPage,
    AccountPage,
    BillWisePage,
    CallUsPage,
    ChangePasswordPage,
    ContactUsPage,
    NotificationPage,
    OrderPlacementPage,
    OrderSummaryPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppSetting,
    WebServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
