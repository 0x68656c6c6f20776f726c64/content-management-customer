import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CasesComponent } from './components/cases/cases.component';
import { NewsComponent } from './components/news/news.component';
import { OnlineEvaluateComponent } from './components/online-evaluate/online-evaluate.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'projects/:id',component:ProjectsComponent
  },
  {
    path:'cases',component:CasesComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'online_evaluation',component:OnlineEvaluateComponent
  },
  {
    path:'about_us',component:AboutUsComponent
  },
  {
    path:'articles/:id',component:ArticlesComponent
  },
  {
    path:'terms_and_conditions',component:TermsAndConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
