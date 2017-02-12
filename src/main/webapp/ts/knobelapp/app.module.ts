

import { AppComponent } from './components/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { routing } from "./components/app.routing";
import { TermineModul } from "./termine.module";
import { SpielModul } from "./spiel.module";
import { APP_BASE_HREF} from '@angular/common';

 
@NgModule({
    imports: [BrowserModule,  routing, TermineModul,SpielModul ],
    declarations: [AppComponent],
    bootstrap : [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue : '/'}]
    
})

export class AppModule{
    
}
// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);