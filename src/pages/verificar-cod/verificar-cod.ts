
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecuperarContraPage, EditarContraPage } from '../index.paginas';
/**
 * Generated class for the VerificarCodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificar-cod',
  templateUrl: 'verificar-cod.html',
})

export class VerificarCodPage {
  enviarCodigo: any=RecuperarContraPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificarCodPage');
  }
  validarcodigo(){
    this.navCtrl.push(EditarContraPage)
  }

}
