import { AppComponent } from "./app.component";
import { TermineComponent } from "./termine/termine.component";
import { SpielComponent } from "./spiel/spiel.component";
import { RouterModule,Routes} from '@angular/router';
const routes: Routes = [
  { path: '',
    redirectTo: '/termine',
    pathMatch: 'full'
  },
    { path: "termine",  component: TermineComponent  },
     { path: "spiel",  component: SpielComponent } 
];

export const routing = RouterModule.forRoot(  routes);
     