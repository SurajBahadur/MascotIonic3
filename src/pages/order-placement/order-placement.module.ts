import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPlacementPage } from './order-placement';

@NgModule({
  declarations: [
    OrderPlacementPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPlacementPage),
  ],
})
export class OrderPlacementPageModule {}
