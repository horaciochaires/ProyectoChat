import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chanel-text',
  templateUrl: './chanel-text.component.html',
  styleUrls: ['./chanel-text.component.css']
})
export class ChanelTextComponent implements OnInit {
  
  @Input() nombre:string;
  constructor() { }
  
 
  ngOnInit() {
  }

}
