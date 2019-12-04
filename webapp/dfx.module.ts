import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DfxComponent } from './dfx.component';
import { PlatformModule } from 'platform/platform.module';

@NgModule({
  declarations: [
    DfxComponent
  ],
  imports: [
    BrowserModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [DfxComponent]
})
export class DfxModule { }
