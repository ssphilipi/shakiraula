import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider:AuthProvider) {

  }

  change(){
    this.navCtrl.setRoot('RegisterPage');
  }

  login(email: string, password: string){
    this.authProvider.login(email, password)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
