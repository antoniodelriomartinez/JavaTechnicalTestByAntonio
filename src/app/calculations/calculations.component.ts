import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getCalculations().subscribe(result => {
      this.calculations = result;
    }
    )
  }
  calculations: any[];
}
