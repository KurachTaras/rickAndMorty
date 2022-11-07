import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [
        CharacterComponent,
        CharactersComponent,
        CharacterDetailsComponent
    ],
    exports: [
        CharacterDetailsComponent,
        CharacterComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CharacterRoutingModule,
        MatPaginatorModule
    ]
})
export class CharacterModule { }
