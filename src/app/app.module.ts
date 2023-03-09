import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactWrapperComponent } from './react/react-wrapper';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        ReactWrapperComponent,
        MainMenuComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (httpClient: HttpClient) => { return new TranslateHttpLoader(httpClient); },
                deps: [HttpClient],
            },
        }),
        NgbModule,
        NgbCollapseModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule
    ]
})
export class AppModule { }
