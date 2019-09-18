import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ComponentToolbarComponent } from './component-toolbar/component-toolbar.component';
import { ComponentBoardComponent } from './component-board/component-board.component';
import { ComponentCardListComponent } from './component-card-list/component-card-list.component';
import { ComponentCardItemComponent } from './component-card-item/component-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent,
    ComponentToolbarComponent,
    ComponentBoardComponent,
    ComponentCardListComponent,
    ComponentCardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
