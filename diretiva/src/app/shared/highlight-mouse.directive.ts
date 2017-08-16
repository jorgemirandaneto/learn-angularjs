import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onmouseleave() {
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','white');
    this.backgroundColor = 'white';
  }

  //Quando não tem manipulação da variavel.
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //Quando tem manipulação da variavel.
  @HostBinding('style.backgroundColor') get setColor(){  
    return this.backgroundColor;
  }

  constructor(/*private elementRef: ElementRef, private renderer: Renderer*/) { }

}
