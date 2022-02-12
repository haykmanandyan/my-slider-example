import {Component, Input, OnInit} from '@angular/core';

interface UrlSliders {
  url: string,
}

interface ImageSliders {
  image: string
}

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})

export class SliderItemComponent implements OnInit {

  @Input() public sliders: UrlSliders[] | ImageSliders[] = [
    {url: '../../assets/Images/carousel-1.jpg'},
    {url: '../../assets/Images/carousel-2.jpg'},
    {url: '../../assets/Images/carousel-3.jpg'},
  ];

  public currentImgNumber = 0;
  public currentKeyName = Object.keys(this.sliders[this.currentImgNumber])[0];
  //OR
  // public currentKeyName = Object.values(this.sliders[this.currentImgNumber])[0];
  // public currentImg = Object.values(this.sliders[this.currentImgNumber])[0];
  // public currentImg: string;
  public timer = null;


  @Input()
  public hasDotsTree = true;

  constructor() {
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.currentImgNumber === this.sliders.length - 1) {
        this.currentImgNumber = 0;
      } else {
        this.currentImgNumber ++;
      }
    }, 3000);
  }


  public onSelectImage(i: number) {
    clearInterval(this.timer);
    this.currentImgNumber = i;
    this.timer = setInterval(() => {
      if (this.currentImgNumber === this.sliders.length - 1) {
        this.currentImgNumber = 0;
      } else {
        this.currentImgNumber += 1;
      }
    }, 3000);
  }

  public choosePreviousImg(): void {
    clearInterval(this.timer);
    if (this.currentImgNumber === 0) {
      this.currentImgNumber = this.sliders.length - 1;
    } else {
      this.currentImgNumber--;
    }
    this.timer = setInterval(() => {
      if (this.currentImgNumber === this.sliders.length - 1) {
        this.currentImgNumber = 0;
      } else {
        this.currentImgNumber += 1;
      }
    }, 3000);
  }

  public chooseNextImg(): void {
    clearInterval(this.timer);
    if (this.currentImgNumber === this.sliders.length - 1) {
      this.currentImgNumber = 0;
    } else {
      this.currentImgNumber++;
    }
    this.timer = setInterval(() => {
      if (this.currentImgNumber === this.sliders.length - 1) {
        this.currentImgNumber = 0;
      } else {
        this.currentImgNumber += 1;
      }
    }, 3000);
  }

}
