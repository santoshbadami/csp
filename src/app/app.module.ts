import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunityCreationComponent } from './_components/opportunity-creation/opportunity-creation.component';
import { OpportunitySearchComponent } from './_components/opportunity-search/opportunity-search.component';

@NgModule({
  declarations: [
    AppComponent,
    OpportunityCreationComponent,
    OpportunitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
