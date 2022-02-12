import {Directive, HostBinding, Input, OnInit} from '@angular/core';

interface BgImg {
  url: string,
}

@Directive({
  selector: '[appBgImage]'
})

export class BgImage implements OnInit {

  @Input()
  appBgImage: BgImg;

  @HostBinding('style.backgroundImage')
  BackgroundImage: string;

  constructor() {
  }

  public ngOnInit() {
    // this.BackgroundImage = `url('${Object.values(this.appBgImage)[0]}')`;
    //OR
    this.BackgroundImage = `url('${this.appBgImage.url}')`;
  }
}
