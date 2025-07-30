import { Directive, ElementRef, inject, output, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollEnd]'
})
export class ScrollEnd implements AfterViewInit, OnDestroy {

  scrolledToEnd = output();
  private observer!: IntersectionObserver;
  private el= inject( ElementRef)

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.scrolledToEnd.emit();
        }
      });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}