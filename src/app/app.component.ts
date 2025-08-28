import {Component, AfterViewInit, OnInit} from '@angular/core';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  pageTitle = 'Tela Inicial'

  constructor(private router:Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(()=>{
        if (this.router.url.includes('home')){
          this.pageTitle = 'Tela Inicial'
        }
        if (this.router.url.includes('residents')){
          this.pageTitle = 'Residentes'
        }
        if (this.router.url.includes('control')){
          this.pageTitle = 'Controle'
        }
        if (this.router.url.includes('report')){
          this.pageTitle = 'Relatorios'
        }
      })
  }


  ngAfterViewInit() {
    const glow = document.querySelector(".cursor-glow") as HTMLDivElement;
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }


}
