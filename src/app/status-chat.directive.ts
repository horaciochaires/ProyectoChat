import { Directive,HostListener,HostBinding  } from '@angular/core';

@Directive({
  selector: '[appStatusChat]'
})
export class StatusChatDirective {
  @HostBinding('class.item-status') private show : boolean=false;
  @HostListener('click')
  onmouseover(){
    console.log("entro");
    this.show=true;
  }
  @HostListener('mouseout')
  onmouseout(){
    this.show=false;
  }
  constructor() { }

}
