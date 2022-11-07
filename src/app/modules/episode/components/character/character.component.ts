import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EpisodeService} from "../../services";
import {ICharacter} from "../../../character/interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: string;

  char: ICharacter;

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private episodeService: EpisodeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.episodeService.getCharacter(this.character).subscribe(value => this.char = value)
  }

  getDetails() {
    this.router.navigate(['characters', this.char.id])
  }
}
