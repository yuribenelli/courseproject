import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')isOpen:boolean = false;
  @HostListener('document:click',['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen: false;
  }

  constructor(private elRef: ElementRef){}

}

