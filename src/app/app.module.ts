import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSequenceComponent } from './components/add-sequence/add-sequence.component';
import { SequenceListComponent } from './components/sequence-list/sequence-list.component';
import { SearchPipe } from './grd-filter.pipe';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    showDismissButton: true,
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AddSequenceComponent,
    SequenceListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false }),
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
