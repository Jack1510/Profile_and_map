import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
    // Remove ProfileComponent from declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVOBqIodbZ0_CbVXZ_5Thu8nZrbwtmB7Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
