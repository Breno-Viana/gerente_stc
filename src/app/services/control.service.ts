import {Injectable} from '@angular/core';
import {balances, departamentBalances} from '../../mock/mock';


@Injectable({providedIn:'root'})
export class ControlService{

  getFinanceData(){
    return balances
  }

  getMonthExpense(){
    return departamentBalances
  }

}
