import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FundoAmareloDirective, HighlightMouseDirective, HighlightDirective]
})
export class SharedModule { }
