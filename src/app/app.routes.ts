import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),

    },
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'control',
        loadComponent: () => import('./components/control/control.component').then(m => m.ControlComponent)
    },
    {
        path:'report',
        loadComponent: ()=> import('./components/report/report.component').then(m => m.ReportComponent)
    },
    {
        path:'residents',
        loadComponent:()=> import('./components/residents/residents.component').then(m => m.ResidentsComponent)
    }
]
