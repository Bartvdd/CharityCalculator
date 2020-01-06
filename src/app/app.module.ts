import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { EventModule } from './event/event.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EventData } from './event/event.data';

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
    HttpClientInMemoryWebApiModule.forRoot(EventData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
