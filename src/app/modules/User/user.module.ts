import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
