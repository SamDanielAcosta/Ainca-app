import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { TestResultComponent } from './test-result/test-result.component';
import { FormDataCandidateComponent } from './form-data-candidate/form-data-candidate.component';
import { DocumentsComponent } from './documents/documents.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CandidateListComponent,
    TestResultComponent,
    FormDataCandidateComponent,
    DocumentsComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
