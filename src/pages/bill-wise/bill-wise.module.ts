import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillWisePage } from './bill-wise';

@NgModule({
  declarations: [
    BillWisePage,
  ],
  imports: [
    IonicPageModule.forChild(BillWisePage),
  ],
})
export class BillWisePageModule {}
