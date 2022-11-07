import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {ICharacter, IInfo} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(page= 1): Observable<IInfo<ICharacter>> {
    return this.httpClient.get<IInfo<ICharacter>>(urls.character, {params:{page}}).pipe(delay(1000))
  }

  getById(id: number): Observable<IInfo<ICharacter>> {
    return this.httpClient.get<IInfo<ICharacter>>(`${urls.character}/${id}`)
  }

}
