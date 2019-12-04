import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformTestComponent } from './platform-test/platform-test.component';



@NgModule({
  declarations: [PlatformTestComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlatformTestComponent
  ]
})
export class PlatformModule { }
