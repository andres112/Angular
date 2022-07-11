import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  constructor(private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

  get gifList() {
    return this.gifsService.gifs;
  }

}
