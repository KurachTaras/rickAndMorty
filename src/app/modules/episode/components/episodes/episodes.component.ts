import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {IEpisode, IInfo} from "../../interfaces";
import {EpisodeService} from "../../services/episode.service";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, AfterViewInit {
  episodes: IEpisode[];
  pages: number;

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private detectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page-1
      this.detectorRef.detectChanges()
    })
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams:{page:page.pageIndex+1}})
        })
    }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['data'] as IInfo<IEpisode>)
    ).subscribe((value => {
      this.pages = value.info.count
      this.episodes = value.results

    }))
  }

}
