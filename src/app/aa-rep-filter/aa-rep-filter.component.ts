import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../filtercomponent';

@Component({
  selector: 'app-aa-rep-filter',
  templateUrl: './aa-rep-filter.component.html',
  styleUrls: ['./aa-rep-filter.component.css']
})
export class AaRepFilterComponent extends FilterComponent implements OnInit {

  constructor() {
    super('aa-rep');
  }

  ngOnInit(): void {
  }


  theMessage(): string {
    return 'aa-rep-message';
  }

}
