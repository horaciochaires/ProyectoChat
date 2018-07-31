import { Directive,HostListener,HostBinding  } from '@angular/core';

@Directive({
  selector: '[appStatusChat]'
})
export class StatusChatDirective {
  @HostBinding('class.fa-circle2') private show : boolean=false;
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
