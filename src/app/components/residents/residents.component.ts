import {Component, ViewChild} from '@angular/core';
import {InfoRowComponent} from './layout/infrow/info-row.component';
import {ResidentViewerComponent} from './layout/residentviewr/resident-viewer.component';
import {ResidentpersistenceComponent} from './layout/residentpersistence/residentpersistence.component';
import {ResidentForForm, Residents} from '../../model_utils/models.interfaces';
import {PayersComponent} from './layout/payers/payers.component';
import {ResidentsService} from '../../services/residents.service';

@Component({
  selector: 'app-residents',
  imports: [
    InfoRowComponent,
    ResidentViewerComponent,
    ResidentpersistenceComponent,
    PayersComponent
  ],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.css'
})
export class ResidentsComponent {
  constructor(private residentService: ResidentsService) {
    this.to_send = this.residentService.findAll()
  }

  @ViewChild(ResidentViewerComponent) child!:ResidentViewerComponent


  edit_resident(resident:Residents){
    window.alert(resident.name)
  }

  calc_tariff(resident:Residents){
    window.alert(resident.amount_debit)
  }


  to_send:Residents[] = []
  save(resident:ResidentForForm){
    this.residentService.save(resident)
    this.to_send = this.residentService.findAll()
    if (this.child){
      this.child.order = 'name'
      this.child.order_()
      this.child.order = 'default'
      this.child.order_()

      this.child.filter = 'on_time'
      this.child.filter_()
      this.child.filter = 'default'
      this,this.child.filter_()
    }
  }




}
