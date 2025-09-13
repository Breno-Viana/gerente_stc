import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ResidentsService} from '../../../../services/residents.service';
import {ResidentForForm} from '../../../../model_utils/models.interfaces';

@Component({
  selector: 'app-residentpersistence',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './residentpersistence.component.html',
  styleUrl: './residentpersistence.component.css'
})
export class ResidentpersistenceComponent {
  constructor(private residentService:ResidentsService) {
  }

  form_group = new FormGroup({
    amount: new FormControl(0),
    name: new FormControl('', [
      Validators.required,
      Validators.min(3)
    ]),
    months: new FormControl(0),
    date: new FormControl(new Date().toISOString().split('T')[0])
  })

  onSubmit() {
    const name = this.form_group.value.name
    const amount = this.form_group.value.amount
    const months = this.form_group.value.months
    const date = this.form_group.value.date
    const entity: {} = {
      name_entity:name,
      amount_entity:amount,
      deb_entity:months,
      last_entity:date
    }

    this.notify_father(entity as ResidentForForm)
    this.form_group = new FormGroup({
      amount: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.min(3)
      ]),
      months: new FormControl(0),
      date: new FormControl(new Date().toISOString().split('T')[0])
    })
    window.alert(`${name} registrado com sucesso`)
  }


  @Output() notifier = new EventEmitter()
  notify_father(resident:ResidentForForm){
    this.notifier.emit(resident)
  }
}
