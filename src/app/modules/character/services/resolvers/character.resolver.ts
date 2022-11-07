import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ICharacter, IInfo} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<IInfo<ICharacter>> {
  constructor(private characterService: CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInfo<ICharacter>> {
    const page = route.queryParams['page'];
    return this.characterService.getAll(page)
  }
}
