import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerificarCodPage } from '../index.paginas';

/**
 * Generated class for the RecuperarContraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-contra',
  templateUrl: 'recuperar-contra.html',
})
export class RecuperarContraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarContraPage');
  }
  generarCodigo(){
    this.navCtrl.push( VerificarCodPage)
  }

}
