import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewsComponent } from './components/news/news.component';
import { CasesComponent } from './components/cases/cases.component';
import { OnlineEvaluateComponent } from './components/online-evaluate/online-evaluate.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialElevationDirective } from './animations/Elevation';
import {MatMenuModule} from '@angular/material/menu';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    NewsComponent,
    CasesComponent,
    OnlineEvaluateComponent,
    AboutUsComponent,
    ArticlesComponent,
    TermsAndConditionsComponent,
    MaterialElevationDirective,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [ AppComponent]
})
export class AppModule { }
