import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { TermineService} from './services/termine.service'
import { TermineComponent } from './components/termine/termine.component'
import { TerminComponent} from './components/termine/termin.component'

@NgModule({
    imports: [ HttpModule,TermineService],
    declarations: [TermineComponent, TerminComponent],
    bootstrap : [TermineComponent]
    
})
export class TermineModul{
    
}