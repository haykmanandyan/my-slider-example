import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderListComponent } from './slider-list/slider-list.component';
import { SliderItemComponent } from './slider-list/slider-item/slider-item.component';
import { BgImage } from './common/bg-image.directive';
import { ImgLoopComponent } from './img-loop/img-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderListComponent,
    SliderItemComponent,
    BgImage,
    ImgLoopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
