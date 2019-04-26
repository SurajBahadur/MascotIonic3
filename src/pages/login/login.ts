import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { WebServiceProvider } from '../../providers/web-service/web-service';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //9819-4638-35  123

  loginForm:FormGroup;
  username:any;
  password:any;
  loading:any;
  loginResponse:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl:ToastController,
    public provider:WebServiceProvider,
    public loadingCtrl:LoadingController,
    public formBuilder:FormBuilder,
    public storage:Storage
  ) {
    
    this.loginForm=formBuilder.group({
      password:['',Validators.compose([Validators.required])],
      username:['',Validators.compose([Validators.required])]
    });

    this.password=this.loginForm.controls['password']
    this.username=this.loginForm.controls['username']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.storage.get('cust_response').then((results)=>{
      if(results){
        this.navCtrl.setRoot(HomePage);
      }
    })

  }

  login(){
    
    this.loading=this.loadingCtrl.create({
      spinner:'bubbles',
      content:`Please wait..`
    });
    this.loading.present();

    this.provider.doLogin(this.username.value,this.password.value).subscribe(
      data=>{
            this.loginResponse=data;
            console.log(this.loginResponse.users[0])
            if(this.loginResponse.users[0].success == "success"){
              this.storage.set('cust_response',this.loginResponse.users[0].custcode);
              this.navCtrl.setRoot(HomePage);
            }else{
              this.showToast(this.loginResponse.users[0].success);
            }
      },
      err=>{
          this.loading.dismiss();
          this.showToast(err.json());
      },

      ()=>{
        this.loading.dismiss();
      }

    )
    
    //this.navCtrl.push(HomePage)
    
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
