import { Component } from '@angular/core';
import {InfoRowComponent} from './layout/infrow/info-row.component';
import {ResidentViewerComponent} from './layout/residentviewr/resident-viewer.component';
import {ResidentpersistenceComponent} from './layout/residentpersistence/residentpersistence.component';

@Component({
  selector: 'app-residents',
  imports: [
    InfoRowComponent,
    ResidentViewerComponent,
    ResidentpersistenceComponent
  ],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.css'
})
export class ResidentsComponent {

}
