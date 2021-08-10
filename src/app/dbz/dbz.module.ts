import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CreateCharacterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
