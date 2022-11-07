import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";

import {IEpisode, IInfo} from "../interfaces";
import {urls} from "../../../configs";
import {ICharacter} from "../../character/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page=1): Observable<IInfo<IEpisode>> {
    return this.httpClient.get<IInfo<IEpisode>>(urls.episode, {params:{page}}).pipe(delay(1000));
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }

  getCharacter(characters: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(characters)
  }

}
