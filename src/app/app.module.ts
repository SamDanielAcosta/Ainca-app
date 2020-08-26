import { HeaderComponent } from './../shareds/header/header.component';
import { FooterComponent } from './../shareds/footer/footer.component';
import { CandidateListComponent } from './../components/candidate-list/candidate-list.component';
import { LoginComponent } from './../components/login/login.component';
import { TestComponent } from './../components/test/test.component';
import { DocumentsComponent } from './../components/documents/documents.component';
import { FormDataCandidateComponent } from './../components/form-data-candidate/form-data-candidate.component';
import { TestResultComponent } from './../components/test-result/test-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
