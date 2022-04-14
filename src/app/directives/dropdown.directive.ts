import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')isOpen:boolean = false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  class: string = "";

  ngOnInit(){
    this.renderer.addClass(this.elRef.nativeElement, this.class)
  }

}

