import {Injectable} from '@angular/core';
import {residents} from '../../mock/mock';
import {ResidentForForm, Residents} from '../model_utils/models.interfaces';

@Injectable({providedIn:'root'})
export class ResidentsService{


  findAll(){
    return residents
  }

  updateOnTime(resident:Residents){
    resident.on_time = !resident.on_time
  }

  getQntOfResidents(){
    return residents.length
  }

  getQntOfNotPaid(){
    let qnt:number = 0;
    for (let i = 0; i < residents.length; i++) {
      if (!residents[i].on_time){
        qnt++
      }
    }
    return qnt;
  }

  getQntOfPaid(){
    let qnt:number = 0;

    for (let i = 0; i <residents.length ; i++) {
      if (residents[i].on_time){
        qnt++
      }
    }
    return qnt
  }

  findBySpecName(spec:string){
    return residents.filter(rr => rr.name.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().includes(spec.toLowerCase()))
  }

  order(residents:Residents[], spec:string){
    switch (spec){
      case 'name':return residents.sort(
        (a,b) => a.name.localeCompare(b.name)
      )
      case 'date': return residents.sort(
        (a,b) => new Date(b.last_pay).getTime() - new Date(a.last_pay).getTime()
      )
      case 'month_np': return residents.sort(
        (a,b)=> a.months_not_paid - b.months_not_paid)
      default: return residents
    }
  }

  filter(residents:Residents[], spec:string){
    switch (spec){
      case 'on_time': return residents.filter(rr => rr.on_time)
      case 'non_time': return residents.filter(rr => !rr.on_time)
      default: return residents
    }
  }

  save(entity:ResidentForForm){
    const to_save:Residents = {
      name:entity.name_entity,
      on_time: entity.deb_entity == 0,
      last_pay:entity.last_entity,
      amount_debit:entity.amount_entity,
      months_not_paid:entity.deb_entity
    }

    residents.push(to_save)
  }

}
