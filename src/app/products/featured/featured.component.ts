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
  };

  selectedGender = "Women";
  selectedType = "Bottoms";
  selectedMood = "Semi-Formal";
  viewSelectedGender = false;
  viewSelectedType = false;
  viewSelectedMood = false;
  viewPreferences = false;

  downArrowPath = "./assets/images/down-arrow.svg";
  upArrowPath = "./assets/images/up-arrow.svg";

  onClickViewPref() {
    this.viewPreferences = !this.viewPreferences;
  }

  onClickGender(gender: string) {
    if (!this.viewPreferences) {
      return;
    }
    switch (gender) {
      case 'men':
        if (this.preferences[gender]) {
          this.selectedGender = "Women";
          this.viewSelectedGender = false;
        } else {
          this.selectedGender = "Men     ";
          this.viewSelectedGender = true;
        }
        this.preferences['men'] = !this.preferences['men'];
        this.preferences['women'] = false;
        break;
      case 'women':
        if (this.preferences[gender]) {
          this.selectedGender = "Women";
          this.viewSelectedGender = false;
        } else {
          this.selectedGender = "Women";
          this.viewSelectedGender = true;
        }
        this.preferences['women'] = !this.preferences['women'];
        this.preferences['men'] = false;
        break;
    }
  }

  onClickType(type: string) {
    if (!this.viewPreferences) {
      return;
    }
    switch (type) {
      case 'tops':
        if (this.preferences[type]) {
          this.selectedType = "Bottoms";
          this.viewSelectedType = false;
        } else {
          this.selectedType = "Tops      ";
          this.viewSelectedType = true;
        }
        this.preferences['tops'] = !this.preferences['tops'];
        this.preferences['bottoms'] = false;
        this.preferences['shoes'] = false;
        break;
      case 'bottoms':
        if (this.preferences[type]) {
          this.selectedType = "Bottoms";
          this.viewSelectedType = false;
        } else {
          this.selectedType = "Bottoms";
          this.viewSelectedType = true;
        }
        this.preferences['bottoms'] = !this.preferences['bottoms'];
        this.preferences['tops'] = false;
        this.preferences['shoes'] = false;
        break;
      case 'shoes':
        if (this.preferences[type]) {
          this.selectedType = "Bottoms";
          this.viewSelectedType = false;
        } else {
          this.selectedType = "Shoes    ";
          this.viewSelectedType = true;
        }
        this.preferences['shoes'] = !this.preferences['shoes'];
        this.preferences['tops'] = false;
        this.preferences['bottoms'] = false;
        break;
    }
  }

  onClickMood(mood: string) {
    if (!this.viewPreferences) {
      return;
    }
    switch (mood) {
      case 'casual':
        if (this.preferences[mood]) {
          this.selectedMood = "Semi-Formal";
          this.viewSelectedMood = false;
        } else {
          this.selectedMood = "Casual          ";
          this.viewSelectedMood = true;
        }
        this.preferences['casual'] = !this.preferences['casual'];
        this.preferences['boujee'] = false;
        this.preferences['semi-formal'] = false;
        this.preferences['business'] = false;
        break;
      case 'boujee':
        if (this.preferences[mood]) {
          this.selectedMood = "Semi-Formal";
          this.viewSelectedMood = false;
        } else {
          this.selectedMood = "Boujee         ";
          this.viewSelectedMood = true;
        }
        this.preferences['boujee'] = !this.preferences['boujee'];
        this.preferences['casual'] = false;
        this.preferences['semi-formal'] = false;
        this.preferences['business'] = false;
        break;
      case 'semi-formal':
        if (this.preferences[mood]) {
          this.selectedMood = "Semi-Formal";
          this.viewSelectedMood = false;
        } else {
          this.selectedMood = "Semi-Formal";
          this.viewSelectedMood = true;
        }
        this.preferences['semi-formal'] = !this.preferences['semi-formal'];
        this.preferences['casual'] = false;
        this.preferences['boujee'] = false;
        this.preferences['business'] = false;
        break;
      case 'business':
        if (this.preferences[mood]) {
          this.selectedMood = "Semi-Formal";
          this.viewSelectedMood = false;
        } else {
          this.selectedMood = "Business       ";
          this.viewSelectedMood = true;
        }
        this.preferences['business'] = !this.preferences['business'];
        this.preferences['casual'] = false;
        this.preferences['boujee'] = false;
        this.preferences['semi-formal'] = false;
        break;
    }
  }

}
