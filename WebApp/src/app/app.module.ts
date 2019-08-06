import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
