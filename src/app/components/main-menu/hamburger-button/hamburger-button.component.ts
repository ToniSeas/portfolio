import { NgIf } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.css']
})
export class HamburgerButtonComponent implements AfterViewInit, OnChanges {
  @Input() size: number | undefined;
  @Input() rotate: boolean | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let rotateAux: boolean = changes['rotate'].currentValue

    if (rotateAux != undefined) {
      this.toggleRotate()
    }
  }

  ngAfterViewInit(): void {
    if (this.size != undefined) {
      const elements = document.getElementsByClassName('__hamburger-bar');

      const size = this.size;
      Array.prototype.forEach.call(elements, function (element: HTMLElement) {
        element.style.width = `${size * 8}px`;
        element.style.height = `${size}px`;
      });
    }

    if (this.rotate != undefined) {
      this.toggleRotate()
    }
  }

  toggleRotate() {
    const barTop = <HTMLElement>document.getElementsByClassName('__bar-top')[0];
    const barMiddle = <HTMLElement>document.getElementsByClassName('__bar-middle')[0];
    const barBottom = <HTMLElement>document.getElementsByClassName('__bar-bottom')[0];

    if (barTop != undefined && barMiddle != undefined && barBottom != undefined) {
      let transitionTimeMs = 1000;

      if (this.rotate) {
        barTop.style.transform = 'rotate(-45deg)';
        barMiddle.style.opacity = '0';
        barBottom.style.transform = 'rotate(45deg)';  
      } else {
        barTop.style.transform = 'rotate(0deg)'
        barMiddle.style.opacity = '1';
        barBottom.style.transform = 'rotate(0deg)'
      }

      barTop.style.transition = `transform ${transitionTimeMs}ms`;
      barMiddle.style.transition = `opacity ${transitionTimeMs}ms`;
      barBottom.style.transition = `transform ${transitionTimeMs}ms`;
      barTop.style.transformOrigin = 'right'
      barBottom.style.transformOrigin = 'right'
    }
  }

}
