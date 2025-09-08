import {Injectable} from '@angular/core';
import {reports} from '../../mock/mock';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  findAll() {
    return reports
  }

  findAllBySpecs(spec: string) {
    return reports.filter(rp => rp.name.toLowerCase().includes(spec.toLowerCase()) || rp.ext.toLowerCase().includes(spec.toLowerCase()))
  }
}
