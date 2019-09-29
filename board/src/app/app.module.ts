import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BoardComponent } from './component/board/board.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardItemComponent } from './component/card-list/card-item/card-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataListService } from './services/data-list.service';

import {
  MatButtonModule,
} from '@angular/material';

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ToolbarComponent,
    CardListComponent,
    FooterComponent,
    CardItemComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
