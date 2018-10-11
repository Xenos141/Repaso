import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MalexPage } from '../malex/malex';
import { MiguelPage } from '../miguel/miguel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Alex = MalexPage;
  miguel = MiguelPage;
  constructor(public navCtrl: NavController) {

  }
  Malex()
  {
    this.navCtrl.push(this.Alex)
  }
  Miguel()
  {
    this.navCtrl.push(this.miguel)
  }
}
