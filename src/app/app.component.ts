import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public translateService: TranslateService) {
    console.log("%c Portafolio creado por Antony Seas", "background-color: green");
    translateService.addLangs(['es', 'en']);
    translateService.setDefaultLang('es');
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }
  
}
