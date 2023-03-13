import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { ProfilePokemonComponent } from './components/profile-pokemon/profile-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardPokemonComponent,
    ListPokemonComponent,
    ProfilePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
