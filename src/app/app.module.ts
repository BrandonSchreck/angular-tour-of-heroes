import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './core/containers/app-container/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './features/auth/auth.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroesModule } from './features/heroes/heroes.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DashboardModule,
    HeroesModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
