import {Component} from '@angular/core';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent {
  //
  // public sliders: string[] = [
  //   '../assets/Images/carousel-1.jpg',
  //   '../assets/Images/carousel-2.jpg',
  //   '../assets/Images/carousel-3.jpg',
  // ];
  // currentImg: number = 0;
  // public timer = null;
  //
  constructor() {
  }

  //
  // ngOnInit(): void {
  // this.timer = setInterval(() => {
  //   this.currentImg += 1;
  // }, 3000);
  // if (this.currentImg > this.sliders.length) {
  //   this.currentImg = 0;
  // }
  // }

}
