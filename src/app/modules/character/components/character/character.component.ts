import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ICharacter} from "../../interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: ICharacter;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([this.character.id],
      {relativeTo: this.activatedRoute}
      )
  }

}
