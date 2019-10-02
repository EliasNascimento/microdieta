import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsComponent } from './layouts/layouts.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MenuComponent } from './layouts/main-layout/menu/menu.component';
import { SharedMaterialModule } from './shared-material.module';
import { LandingComponent } from './views/landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    MainLayoutComponent,
    MenuComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    FlexLayoutModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
