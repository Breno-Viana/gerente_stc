import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarStateService{
  private index:number = 0

  setIndexOfNav(index:number){
    this.index = index
  }

  getIndexOfNav():number{
    return this.index
  }
}
