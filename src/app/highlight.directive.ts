import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() color!: string;

  @HostBinding('style.color') bindingColor!: string;

  constructor(
    private elementRef: ElementRef<HTMLParagraphElement>,
    private renderer2: Renderer2
  ) { }

  ngAfterViewInit() {
    // this.bindingColor = this.color;
    // this.elementRef.nativeElement.style.color = this.color;
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', this.color)
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.bindingColor = 'red'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bindingColor = 'blue'
  }
}
