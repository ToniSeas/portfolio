import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isScrolled = false;
  private scrollOffSet = 100;
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.checkScroll();
  }

  checkScroll () {
    this.isScrolled = window.scrollY >= this.scrollOffSet;
  }

}
