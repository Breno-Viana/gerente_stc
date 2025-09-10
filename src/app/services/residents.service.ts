import {Injectable} from '@angular/core';
import {residents} from '../../mock/mock';
import {Residents} from '../model_utils/models.interfaces';


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
}
