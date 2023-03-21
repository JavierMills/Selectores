import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { SelectorComponent } from './pages/selector/selector.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { LoadingComponent } from './pages/selector/loading/loading.component';



@NgModule({
  declarations: [
    SelectorComponent,
    LoadingComponent
    
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoadingComponent
  ]
})
export class PaisesModule { }
