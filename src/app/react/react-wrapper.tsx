import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactApp } from './react-app';

const containerName = 'ReactComponentContainer';

@Component({
  selector: `react-wrapper`,
  template: `<section #${containerName}></section>`,
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent implements OnInit {
  @ViewChild(containerName, { static: true })
  private containerRef!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {

    ReactDOM.render(
      <React.StrictMode>
        <ReactApp/>
      </React.StrictMode>
      , 
      this.containerRef.nativeElement
    );

  }
}
