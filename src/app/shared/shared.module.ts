import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports:[ErrorMsgDirective]
  ,

  imports: [
    CommonModule
  ]
})
export class SharedModule { }
