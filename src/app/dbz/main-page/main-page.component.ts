import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newCharacter: Character = {
    name: 'Trucks',
    power: 14000,
  };

  add() {
    console.log(this.newCharacter);
  }
}
