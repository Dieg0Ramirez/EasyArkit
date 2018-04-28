import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecuperarContraPage } from '../recuperar-contra/recuperar-contra';
import { RegistroUsuPage } from '../index.paginas';
import { RegistroEmprePage } from '../index.paginas';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  recoverPass(){
    //Navegacion
    this.navCtrl.push( RecuperarContraPage)
  }

  userRegisterUsuario(){
    this.navCtrl.push(RegistroUsuPage)
  }

  userRegisterEmpresa(){
    this.navCtrl.push(RegistroEmprePage)
  }
}
