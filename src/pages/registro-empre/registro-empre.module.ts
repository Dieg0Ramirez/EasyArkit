import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroEmprePage } from './registro-empre';

@NgModule({
  declarations: [
    RegistroEmprePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroEmprePage),
  ],
})
export class RegistroEmprePageModule {}
