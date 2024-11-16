import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { CreatorsComponent } from './creators/creators.component';
import { ContactComponent } from './contact/contact.component';
import { SpeedInsights } from "@vercel/speed-insights/next"


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '../mission', component: MissionComponent },
  { path: './vision', component: VisionComponent },
  { path: './objectives', component: ObjectivesComponent },
  { path: './strategies', component: StrategiesComponent },
  { path: './products', component: ProductsComponent },
  { path: './clients', component: ClientsComponent },
  { path: './creators', component: CreatorsComponent },
  { path: './contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
