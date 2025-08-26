import {Component, inject, input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";


@Component({
    selector: 'app-sidebar',
    imports: [
        NgForOf,
        RouterLink
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


    buttons = [
        {name: 'tela inicial', icon: 'assets/home.png', route: '/home'},
        {name: 'residents', icon: 'assets/residents.png', route: '/residents'},
        {name: 'controle', icon: 'assets/control.png', route: '/control'},
        {name: 'relatório', icon: 'assets/report.png', route: '/report'}]


    selectedIndex: number = 0


}
