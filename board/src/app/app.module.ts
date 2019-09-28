import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BoardComponent } from './component/board/board.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardItemComponent } from './component/card-list/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ToolbarComponent,
    CardListComponent,
    FooterComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
