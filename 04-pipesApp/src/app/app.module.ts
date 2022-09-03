import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

// change the app locale
import spanish from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
registerLocaleData(spanish);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }], // for global change of locale
  bootstrap: [AppComponent],
})
export class AppModule {}
