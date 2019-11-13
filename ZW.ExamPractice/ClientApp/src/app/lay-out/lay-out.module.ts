import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayOutComponent } from './lay-out.component';
import { LayOutRoutingModule } from './lay-out-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayOutRoutingModule
  ],
  declarations: [LayOutComponent, TestComponent],
  exports: [LayOutComponent, TestComponent]
})
export class LayOutModule { }
