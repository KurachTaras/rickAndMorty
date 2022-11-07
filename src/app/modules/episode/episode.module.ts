import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {EpisodeService} from "./services/episode.service";
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    CharacterComponent
  ],
    imports: [
        CommonModule,
        EpisodeRoutingModule,
        MatPaginatorModule
    ],
  providers:[
    EpisodeService
  ]
})
export class EpisodeModule { }
