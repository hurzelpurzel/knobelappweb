import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { TermineService} from './services/termine.service'
import { TermineComponent } from './components/termine/termine.component'
import { TerminComponent} from './components/termine/termin.component'

@NgModule({
    imports: [ HttpModule],
    declarations: [TermineComponent, TerminComponent],
    bootstrap : [TermineComponent],
    providers : [TermineService]
    
})
export class TermineModul{
    
}