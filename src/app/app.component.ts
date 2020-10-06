import { Component } from '@angular/core';
import { FilterComponent } from './filtercomponent';
import { SnpFilterComponent } from './snp-filter/snp-filter.component';
import { AaRepFilterComponent } from './aa-rep-filter/aa-rep-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vgvui';

  filters: FilterComponent[] = [ new SnpFilterComponent(), new AaRepFilterComponent() ];

  removeFilter(index: number): void {
    this.filters.splice(index, 1);
  }
}
