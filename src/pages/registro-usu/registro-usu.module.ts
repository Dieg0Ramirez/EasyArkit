import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroUsuPage } from './registro-usu';

@NgModule({
  declarations: [
    RegistroUsuPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroUsuPage),
  ],
})
export class RegistroUsuPageModule {}
