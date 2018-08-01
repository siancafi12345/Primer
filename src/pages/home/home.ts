import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NuevaPage } from '../nueva/nueva';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgSrc: string = "../assets/logo/user.jpeg";
  person:string = "";
  key: string;
  pa = NuevaPage;

  constructor(public navCtrl: NavController,public navParn:NavParams) {
    






  }
  validar(){
    alert("si");
  }

  nueva(){
    this.navCtrl.push(this.pa,{
      "person" : this.person});
  }
  olvide(){
    alert("olvide")
  }

}
