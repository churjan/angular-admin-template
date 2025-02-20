import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
})
export class SharedModule {}
