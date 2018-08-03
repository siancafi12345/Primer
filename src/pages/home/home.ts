import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NuevaPage } from '../nueva/nueva';
import { InicioPage } from '../inicio/inicio';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgSrc: string = "../assets/logo/user.jpeg";
  person:string = "";
  requerido: boolean = false;
  requeridok: boolean = false;

  key: string;
  pa = NuevaPage;
  inicio = InicioPage;

  constructor(public navCtrl: NavController,public navParn:NavParams) {
    






  }
  Login(){
    console.log(this.person);
    if(this.person == ""){
      
      this.requerido = true;
    }else{
      this.requerido = false;
    }
   
    if(this.key == undefined){
      
      this.requeridok = true;
    }else{
      this.requeridok = false;
    }
    
    if(this.person == "simon" && this.key == "siancafi1"){ 
      this.navCtrl.push(this.inicio,{
        "person" : this.person});
    }else if(this.person != "simon"){
      alert("el campo usuario es no es balido")
    }else if(this.key != "siancafi1"){
      alert("el campo contraseña no es valido")
    }

    
    
    
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
