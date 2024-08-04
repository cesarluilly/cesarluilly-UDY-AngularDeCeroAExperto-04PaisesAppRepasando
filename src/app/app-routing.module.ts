import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/AboutPage/AboutPage.component";

const routes: Routes = [
{
  path:'home',
  component: HomePageComponent
},
{
  path:'about',
  component: AboutPageComponent
},
{
  path:'**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [
    // En caso de ser el archivo routing principal, se le pone el forRoot
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
