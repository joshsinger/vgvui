import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../filtercomponent';


@Component({
  selector: 'app-snp-filter',
  templateUrl: './snp-filter.component.html',
  styleUrls: ['./snp-filter.component.css']
})
export class SnpFilterComponent extends FilterComponent implements OnInit {

  constructor() {
    super('snp');
  }

  ngOnInit(): void {
  }

  theMessage(): string {
    return 'snp-message';
  }
}
