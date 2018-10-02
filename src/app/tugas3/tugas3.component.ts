import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
      .next{
        color: white;
      }
  `]
})
export class Tugas3Component implements OnInit {
  detail = '';
  i = 1;
  log = [];

  onClick() {
    this.detail = "POLITEKNIK NEGERI MALANG";
    this.log.push(this.i);
    this.i++;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
