import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { ContenidoPrincipalComponent } from './component/contenido-principal/contenido-principal.component';
import { ContenidoSecundarioComponent } from './component/contenido-secundario/contenido-secundario.component';
import { ExperienciaHabilidadesComponent } from './component/experiencia-habilidades/experiencia-habilidades.component';
import { ContactoComponent } from './component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContenidoPrincipalComponent,
    ContenidoSecundarioComponent,
    ExperienciaHabilidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
