import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { EventModule } from './event/event.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './inmemorydata/inmemorydata.data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    EventModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
