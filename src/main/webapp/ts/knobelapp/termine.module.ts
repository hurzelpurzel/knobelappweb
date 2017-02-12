import { NgModule} from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { TermineService} from './services/termine.service'
import { TermineComponent } from './components/termine/termine.component'
import { TerminComponent} from './components/termine/termin.component'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ HttpModule, CommonModule,FormsModule],
    declarations: [TermineComponent, TerminComponent],
    exports : [TermineComponent],
    providers : [TermineService]
    
})
export class TermineModul{
    
}