import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { IncButtonComponent } from './components/blocks/incbutton.component'
import { SpielComponent} from './components/spiel/spiel.component'
import { RundeComponent} from './components/spiel/runde.component'
import { RundeKopfComponent} from './components/spiel/rundekopf.component'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ HttpModule, CommonModule,FormsModule ],
    declarations: [IncButtonComponent, SpielComponent, RundeComponent,RundeKopfComponent ],
    exports : [SpielComponent]
    
})
export class SpielModul{
    
}