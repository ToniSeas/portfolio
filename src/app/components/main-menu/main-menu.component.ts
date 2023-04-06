import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public isMinWidth = false;
  private minWidth: number = 750;
  public isMenuCollapsed = true;
  private playingSidenavAnimation: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkMinWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkMinWidth();
  }

  private checkMinWidth() {
    this.isMinWidth = (window.innerWidth < this.minWidth);
  }

  toggleMenuCollapse() {
    this.isMenuCollapsed = !this.isMenuCollapsed;

    if (!this.isMenuCollapsed && !this.playingSidenavAnimation) {
      this.animateSidenavOpening(450, 35);
    }
  }

  async animateSidenavOpening(timeMs: number, radius: number) {
    this.playingSidenavAnimation = true;
    const element = <HTMLElement>document.getElementsByClassName('my-sidebar-mode')[0];
    element.style.transition = `all ${timeMs}ms`

    while (timeMs > 5) {
      this.borderRadiusLeft(element, radius);
      await this.sleep(timeMs);
      timeMs = timeMs / 2;
      radius = radius / 2;
      element.style.transition = `border-radius ${timeMs}ms`
      this.borderRadiusLeft(element, 0);
      await this.sleep(timeMs);
    }

    element.style.transition = `right 0.5s`
    this.playingSidenavAnimation = false;
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  borderRadiusLeft(element: HTMLElement, percentage: number) {
    element.style.borderTopLeftRadius = `${percentage}%`;
    element.style.borderBottomLeftRadius = `${percentage}%`;
  }

}
