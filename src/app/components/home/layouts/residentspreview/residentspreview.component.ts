import {Component, OnInit} from '@angular/core';
import {SidebarStateService} from '../../../../services/sidebar.service';
import {Router} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {residentes_pag} from '../../../../../mock/mock'

@Component({
  selector: 'app-residentspreview',
  imports: [
    MatTooltip,
    MatTableModule
  ],
  templateUrl: './residentspreview.component.html',
  styleUrl: './residentspreview.component.css'
})
export class ResidentsPreviewComponent {

  dataSource = residentes_pag
  displayColumn = ['Nome', 'Ultimo Pagamento', 'Em Dia']

  constructor(private stateService: SidebarStateService, private router: Router) {
  }

  gotoResidents() {
    this.router.navigate(['/residents'])
    this.stateService.setIndexOfNav(1)
  }
}
