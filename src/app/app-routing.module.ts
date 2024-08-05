import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/AboutPage.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

const routes: Routes = [
{
  // path:'home',
  path:'',
  component: HomePageComponent
},
{
  path:'about',
  component: AboutPageComponent
},
{
  path:'contact',
  component: ContactPageComponent
},
{
  path:'**',
  // redirectTo:'home'
  redirectTo:''
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
