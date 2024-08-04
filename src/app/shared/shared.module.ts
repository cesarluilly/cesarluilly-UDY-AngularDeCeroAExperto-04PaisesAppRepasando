import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.component';


@NgModule({
  declarations: [

    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
