import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

  preferences = {
    'men': false,
    'women': false,
    'tops': false,
    'bottoms': false,
    'shoes': false,
    'casual': false,
    'boujee': false,
    'semi-formal': false,
    'business': false
  }

  onClickGender(gender: string) {
    switch (gender) {
      case 'men':
        this.preferences['men'] = !this.preferences['men'];
        this.preferences['women'] = false;
        break;
      case 'women':
        this.preferences['women'] = !this.preferences['women'];
        this.preferences['men'] = false;
        break;
    }
  }

  onClickType(type: string) {
    switch (type) {
      case 'tops':
        this.preferences['tops'] = !this.preferences['tops'];
        this.preferences['bottoms'] = false;
        this.preferences['shoes'] = false;
        break;
      case 'bottoms':
        this.preferences['bottoms'] = !this.preferences['bottoms'];
        this.preferences['tops'] = false;
        this.preferences['shoes'] = false;
        break;
      case 'shoes':
        this.preferences['shoes'] = !this.preferences['shoes'];
        this.preferences['tops'] = false;
        this.preferences['bottoms'] = false;
        break;
    }
  }

  onClickMood(mood: string) {
    switch (mood) {
      case 'casual':
        this.preferences['casual'] = !this.preferences['casual'];
        this.preferences['boujee'] = false;
        this.preferences['semi-formal'] = false;
        this.preferences['business'] = false;
        break;
      case 'boujee':
        this.preferences['boujee'] = !this.preferences['boujee'];
        this.preferences['casual'] = false;
        this.preferences['semi-formal'] = false;
        this.preferences['business'] = false;
        break;
      case 'semi-formal':
        this.preferences['semi-formal'] = !this.preferences['semi-formal'];
        this.preferences['casual'] = false;
        this.preferences['boujee'] = false;
        this.preferences['business'] = false;
        break;
      case 'business':
        this.preferences['business'] = !this.preferences['business'];
        this.preferences['casual'] = false;
        this.preferences['boujee'] = false;
        this.preferences['semi-formal'] = false;
        break;
    }
  }

}
