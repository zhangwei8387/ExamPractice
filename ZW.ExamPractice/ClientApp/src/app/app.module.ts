import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    IconsProviderModule,
     /** 导入 ng-zorro-antd 模块 **/
     NgZorroAntdModule
  ],
   /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
   providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
