import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  btns = [
    {name:'tela inicial', icon:'assets/home.png'},
    {name: 'residents', icon: 'assets/residents.png'},
    {name:'controle', icon: 'assets/control.png'},
    {name:'relatório', icon: 'assets/report.png'}]
}
