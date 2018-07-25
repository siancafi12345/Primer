import { Component } from '@angular/core';

/**
 * Generated class for the SaludaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'saluda',
  templateUrl: 'saluda.html'
})
export class SaludaComponent {

  text: string;

  constructor() {
    console.log('Hello SaludaComponent Component');
    this.text = 'Hello World';
  }

}
