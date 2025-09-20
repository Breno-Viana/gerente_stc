import {Component, ViewChild} from '@angular/core';
import {InfoRowComponent} from './layout/infrow/info-row.component';
import {ResidentViewerComponent} from './layout/residentviewr/resident-viewer.component';
import {ResidentpersistenceComponent} from './layout/residentpersistence/residentpersistence.component';
import {ResidentForForm, Residents} from '../../model_utils/models.interfaces';
import {ResidentsService} from '../../services/residents.service';
import {EntriesCardComponent} from './layout/entries-card/entries-card.component';
import {EntriesPayersCardComponent} from './layout/entries-payers-card/entries-payers-card.component';
import {PayerComponent} from './layout/payer/payer.component';

@Component({
  selector: 'app-residents',
  imports: [
    InfoRowComponent,
    ResidentViewerComponent,
    ResidentpersistenceComponent,
    EntriesCardComponent,
    EntriesPayersCardComponent,
    PayerComponent
  ],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.css'
})
export class ResidentsComponent {
  constructor(private residentService: ResidentsService) {
    this.to_send = this.residentService.findAll()
  }

  @ViewChild(ResidentViewerComponent) child!: ResidentViewerComponent
  @ViewChild(PayerComponent) child_p!:PayerComponent


  edit_resident(resident: Residents) {
    window.api.showWarning(`id ${resident.id}  nome ${resident.name}`)
  }

  calc_tariff(resident: Residents) {
    window.api.showWarning(resident.amount_debit.toString())
  }

  update_payment(resident: Residents) {

  }


  to_send!: Residents[]

  save(resident: ResidentForForm) {
    this.residentService.save(resident)
    this.child_p.load_opts()
    this.reload()
  }

  private reload() {
    this.to_send = this.residentService.findAll()
    if (this.child) {
      this.child.order = 'name'
      this.child.order_()
      this.child.order = 'default'
      this.child.order_()

      this.child.filter = 'on_time'
      this.child.filter_()
      this.child.filter = 'default'
      this.child.filter_()
    }
  }


}
