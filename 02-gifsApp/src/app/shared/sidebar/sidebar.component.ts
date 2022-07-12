import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  // get the history from the service
  get history(): string[] {
    return this.gifsService.history;
  }

  search = (term:string) =>{
    this.gifsService.addHistoryItem(term);
  }
}
