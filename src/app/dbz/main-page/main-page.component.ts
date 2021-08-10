import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  newCharacter: Character = {
    name: '',
    power: 0,
  };

  add(): void {
    //Termina la ejecución de la función en caso que el el nombre del personaje sea un string vacío
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    console.log(this.newCharacter);
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
