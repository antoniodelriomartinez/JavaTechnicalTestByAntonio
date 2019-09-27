import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { DealsComponent } from './deals/deals.component';
import { CalculationsComponent } from './calculations/calculations.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'events', component: EventsComponent},
  {path:'deals', component: DealsComponent},
  {path:'calculations', component: CalculationsComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
