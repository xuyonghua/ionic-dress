import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ThemeableBrowser} from "@ionic-native/themeable-browser";

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem: any;
  imgs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private themeableBrowser: ThemeableBrowser) {
    this.selectedItem = this.navParams.get("item");
    if (this.selectedItem.SmallImages) {
      this.imgs = this.selectedItem.SmallImages;
    }
  }

  goBuy() {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    this.themeableBrowser.create(this.selectedItem.ClickUrl, '_blank', options);
  }
}
