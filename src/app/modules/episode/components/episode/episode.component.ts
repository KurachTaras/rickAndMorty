import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IEpisode} from "../../interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input()
  episode: IEpisode;
  characters: [];
  private http: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([this.episode.id],
      {relativeTo: this.activatedRoute})
  }
}
