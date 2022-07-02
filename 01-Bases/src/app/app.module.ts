import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { ListComponent } from './components/heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
