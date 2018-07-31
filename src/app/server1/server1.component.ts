import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
@Input() item:string;
  constructor() { }

  ngOnInit() {
  }
  agregarnombre(){
    return localStorage.getItem("item")
 }
}
