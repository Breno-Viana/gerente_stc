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
    if (!spec) return reports;

    const search = spec.toLowerCase();
    return reports.filter(rp =>
      rp.name.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().includes(search) ||
      rp.ext.toLowerCase().includes(search)
    );
  }

}
