import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public isMinWidth = false;
  private minWidth:number = 750;

  constructor() {}

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

}
