import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children:[
      {
        path: '', redirectTo: 'episodes', pathMatch: 'full'
      },
      {
        path: 'episodes', loadChildren:()=>import('./modules/episode/episode.module').then(value => value.EpisodeModule)
      },
      {
        path: 'characters', loadChildren:()=>import('./modules/character/character.module').then(value => value.CharacterModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
