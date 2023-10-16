import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio = 0;
      this.series.forEach((serie) => {
        this.promedio += serie.seasons / series.length;
      });
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}