import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController,normalizeURL  } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DomSanitizer } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-order-placement',
  templateUrl: 'order-placement.html',
})
export class OrderPlacementPage {

  colorList:any;
  response:any;

  loading:any;
  custCode:any;
  imageURI:any;
  fileName:any;
  selectedImage:any='./assets/imgs/noimage.png';

  order:any={
    'design_no':[],
    'ref_no':[],
    'chest':[],
    'waist':[],
    'hip':[],
    'shoulder':[],
    'sleeves':[],
    'length':[],
    'neck':[],
    'delivery_date':[],
    'remarks':[],
    'other_specification':[],
    'color':[]
  }

  constructor(public navCtrl: NavController,
    public provider:WebServiceProvider,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController,
    public navParams: NavParams,
    public transfer:FileTransfer,
    public domSanitizer:DomSanitizer,
    private camera: Camera,
    public storage:Storage) { 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPlacementPage');
    this.getColorsList();
    this.storage.get('cust_response').then((results)=>{
      this.custCode=results;
    })
      
    }


  getColorsList(){   
    this.provider.getColorList(9032).subscribe(
      data=>{
        this.response=data;
        this.colorList=this.response.products;
        console.log(this.response);
      },
      err=>{
          this.showToast("Please try again later");
      },

      ()=>{ 
      }
    )
  }

  onMakeOrderClick(){

    // console.log(this.order.design_no);
    
    if(this.order.design_no==""){
      this.showToast("Enter product design");
      return;
    }else if(this.order.delivery_date==""){
      this.showToast("Enter delivery  date");
      return;
    }

    if(this.order.remarks==""){
      this.order.remarks="N/A";
    }
    
    if(this.order.other_specification==""){
      this.order.other_specification="N/A";
    }
    

    if(this.order.ref_no==""){
      this.order.ref_no="N/A";
    }

    var date=this.order.delivery_date;
    var dateArr=date.split('-');
    var formatDate=dateArr[2]+'-'+dateArr[1]+'-'+dateArr[0];


    this.loading=this.loadingCtrl.create({
      spinner:'bubbles',
      content:`Please wait..`
    });
    this.loading.present();

    //this.showToast(this.fileName);

    this.provider.saveOrder(this.order,this.fileName,this.custCode,formatDate).subscribe(
      data=>{
        this.response=data;
        if(this.response.SaveCart[0].Msg=="Saved Successfully"){
            this.showToast(this.response.SaveCart[0].Msg);
            this.uploadFile();
        }
        
        // this.colorList=this.response.products;
        console.log(data);
        //this.colorList=this.response.Order
      },
      err=>{
          this.loading.dismiss();
          console.log(err);
          this.showToast(err.message)
      },

      ()=>{ 
        this.loading.dismiss();
      }
    )
  }


  chunk(str: any, position: number){
    let ret = [];
    let i;
    let len;

    for(i = 0, len = str.length; i < len; i += position) {
       ret.push(str.substr(i, position));
    }

    console.log(ret);
    return ret;
  }

  addDot(type){

    switch (type) {
    case 'chest': 
    if(this.order.chest.length==2){
      this.order.chest=this.order.chest+'.';
    }
    break;
    case 'waist':
    if(this.order.waist.length==2){
      this.order.waist=this.order.waist+'.';
    }
    break;
    case 'hip':
    if(this.order.hip.length==2){
      this.order.hip=this.order.hip+'.';
    }
    break;
    case 'shoulder':
    if(this.order.shoulder.length==2){
      this.order.shoulder=this.order.shoulder+'.';
    }
    break;
    case 'sleeves':
    if(this.order.sleeves.length==2){
      this.order.sleeves=this.order.sleeves+'.';
    }
    break;
    case 'length':
    if(this.order.length.length==2){
      this.order.length=this.order.length+'.';
    }
    break;
    case 'neck':
    this.order.neck=this.chunk(this.order,2).join('.');
    if(this.order.neck.length==2){
      this.order.neck=this.order.neck+'.';
    }
    break;    
    default:
    break;
    }
    //first remove previous spaces
    // this.textNumber = this.textNumber.replace(/\s/g, '');

    //then add space (or any char) after second (or any "n-th") position
    // this.textNumber = this.chunk(this.textNumber, 2).join(' ');
  }

  validate(event){
    return event.charCode >= 48 && event.charCode <= 57;
}

  getImageFromCamera(){
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.fileName = this.imageURI.substr(this.imageURI.lastIndexOf('/') + 1);
      this.selectedImage=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      
      var fileType   = this.fileName.substring(this.fileName.lastIndexOf(".") + 1);

      //this.showToast(this.fileName);
      //this.showToast(fileType);
    }, (err) => {
      console.log(err);
      this.showToast(err);
    });


  }

  /**
   * https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-using-native-file-transfer-plugin
   */
  getImage() {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.fileName = this.imageURI.substr(this.imageURI.lastIndexOf('/') + 1);
      this.selectedImage=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      console.log(err);
      this.showToast(err);
    });
  }


  
uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();
  let options: FileUploadOptions = {
    fileKey: 'myFile',
    fileName: this.fileName,
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://orders.whytobuy.in/savetofile.php', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    loader.dismiss();
    this.showToast(JSON.stringify(data)+"Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.showToast(err);
  });
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
