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
}
