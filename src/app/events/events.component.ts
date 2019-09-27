import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getEvents().subscribe(result=>{
      this.events=result;
    }
    )
  }
events: any[];
}
