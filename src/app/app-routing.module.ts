import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/AboutPage.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

const routes: Routes = [
// {
//   // path:'home',
//   path:'',
//   component: HomePageComponent
// },
{
  path:'about',
  component: AboutPageComponent
},
{
  path:'contact',
  component: ContactPageComponent
},
{
  path:'countries',
  // El import es una promesa. Y esta es la sintaxis, es rara
  //    pero solo hay que seguir el formato.
  loadChildren: () => import ('./countries/countries.module')
    .then( m => m.CountriesModule)
},
{
  path:'**',
  // redirectTo:'home'
  redirectTo:'countries'
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
