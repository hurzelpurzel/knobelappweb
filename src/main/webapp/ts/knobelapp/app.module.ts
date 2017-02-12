import { HttpModule} from '@angular/http';

import { AppComponent } from './components/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { routing } from "./components/app.routing";

import { APP_BASE_HREF} from '@angular/common';

 
@NgModule({
    imports: [BrowserModule, HttpModule, routing ],
    declarations: [AppComponent],
    bootstrap : [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue : '/'}]
    
})

export class AppModule{
    
}
// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);