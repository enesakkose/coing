import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[outsideClick]',
})
export class ClickOutsideDirective {
  @Output()
  outsideClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:mousedown', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
        return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.outsideClick.emit(event);
    }
}
}
