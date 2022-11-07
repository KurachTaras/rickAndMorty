import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterResolver} from "./services";
import * as path from "path";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";

const routes: Routes = [
  {
    path: '', component: CharactersComponent, runGuardsAndResolvers:'paramsOrQueryParamsChange', resolve: {data: CharacterResolver}

  },
  {
    path: ':id', component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
