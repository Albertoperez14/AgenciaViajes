import { Routes } from '@angular/router';
import { DetallePlaneta } from './detalle-planeta/detalle-planeta';
import { Planetas } from './planetas/planetas';
import { Embarque } from './embarque/embarque';
import { billeteGuardGuard } from './billete-guard-guard';
import { AgujeroNegro } from './agujero-negro/agujero-negro';
export const routes: Routes = [
    {
        
        path: 'planeta/:id',
        component:DetallePlaneta
    },
    {
        path: '', component:Planetas 
    },
    {
        path:'embarque',
        component:Embarque,
        canActivate:[billeteGuardGuard]
    },
    {
        path: '**',
        component: AgujeroNegro
    }
];
