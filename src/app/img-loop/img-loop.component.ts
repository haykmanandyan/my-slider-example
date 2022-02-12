import {Component, Input, OnInit} from '@angular/core';

interface UrlSliders {
  url: string,
}

interface ImageSliders {
  image: string
}

@Component({
  selector: 'app-img-loop',
  templateUrl: './img-loop.component.html',
  styleUrls: ['./img-loop.component.scss']
})

export class ImgLoopComponent implements OnInit {


  @Input()
  public sliders: UrlSliders[] | ImageSliders[] = [
    {url: '../../assets/Images/carousel-1.jpg'},
    {url: '../../assets/Images/carousel-2.jpg'},
    {url: '../../assets/Images/carousel-3.jpg'},
  ];
  public currentImg = 0;
  public link = Object.keys(this.sliders[this.currentImg])[0];
  public timer = null;

  constructor() {
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.currentImg === this.sliders.length - 1) {
        this.currentImg = 0;
      } else {
        this.currentImg++;
      }
    }, 3000);
  }

}
