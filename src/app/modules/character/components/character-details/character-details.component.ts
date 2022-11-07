import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CharacterService} from "../../services";
import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: ICharacter;

  constructor(private activatedRoute: ActivatedRoute,
              private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      // @ts-ignore
      this.characterService.getById(id).subscribe((value => this.character = value))
    })
  }

}
