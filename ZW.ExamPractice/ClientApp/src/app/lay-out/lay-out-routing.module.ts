import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayOutComponent } from './lay-out.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: LayOutComponent,
    children: [
      { path: 'test', component: TestComponent },
      { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
