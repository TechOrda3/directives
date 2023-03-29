import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { EducationComponent } from './education/education.component';
import { DevelopmentComponent } from './development/development.component';
import {HasRoleDirective} from './has-role.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    EducationComponent,
    DevelopmentComponent,
    HasRoleDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
