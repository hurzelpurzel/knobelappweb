import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { IncButtonComponent } from './components/blocks/incbutton.component'
import { SpielComponent} from './components/spiel/spiel.component'
import { RundeComponent} from './components/spiel/runde.component'
import { RundeKopfComponent} from './components/spiel/rundekopf.component'

@NgModule({
    imports: [ HttpModule],
    declarations: [IncButtonComponent, SpielComponent, RundeComponent,RundeKopfComponent ],
    bootstrap : [SpielComponent]
    
})
export class SpielModul{
    
}