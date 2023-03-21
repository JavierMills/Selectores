import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';

const routes: Routes = [
  {
    // se definira en el app.module
    path: '',
    children: [
      {
        path: 'selector',
        component: SelectorComponent,
      },
      {
        path: '**',
        redirectTo: 'selector',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PaisesRoutingModule {}
