import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),

    },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'control',
        loadComponent: () => import('./control/control.component').then(m => m.ControlComponent)
    },
    {
        path:'report',
        loadComponent: ()=> import('./report/report.component').then(m => m.ReportComponent)
    },
    {
        path:'residents',
        loadComponent:()=> import('./residents/residents.component').then(m => m.ResidentsComponent)
    }
]