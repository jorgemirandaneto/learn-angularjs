import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.background = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') background: string;

  constructor() { }

  ngOnInit() {
    this.background = this.defaultColor;    
  }  
}
