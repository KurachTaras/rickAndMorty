import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {EpisodeService} from "../episode.service";
import {IEpisode, IInfo} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IInfo<IEpisode>> {
  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInfo<IEpisode>> {
    const page = route.queryParams['page'];
    return this.episodeService.getAll(page)
  }
}
