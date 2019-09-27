import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getDeals().subscribe(result => {
      this.deals = result;
    }
    )
  }
  deals: any[];
}
