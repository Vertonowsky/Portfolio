import {Directive, ElementRef, Renderer2, HostListener, AfterViewInit, Input, numberAttribute} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit {
  @Input({transform: numberAttribute, alias: "appScrollAnimation"}) visibilityThreshold: number = 0.9;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.isElementOutOfView())
      this.renderer.addClass(this.el.nativeElement, 'is-hidden');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isElementInView() && this.el.nativeElement.classList.contains('is-hidden')) {
      this.renderer.removeClass(this.el.nativeElement, 'is-hidden');
      this.renderer.addClass(this.el.nativeElement, 'slideAnimation');
    }
  }

  private isElementInView(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top <= (window.innerHeight * this.visibilityThreshold);
  }

  private isElementOutOfView(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top > (window.innerHeight * this.visibilityThreshold);
  }
}
