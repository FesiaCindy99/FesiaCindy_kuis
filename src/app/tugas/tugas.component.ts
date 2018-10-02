import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewUser = false;
  UserCreationStatus = 'Tidak ada Username baru yang telah dibuat!';
  UserName:string = '';

  constructor() { 
    setTimeout(()=> {
      this.allowNewUser = true; //memakai this karena memanggil variabel di class itu sendiri
    }, 2000)
  }

  ngOnInit() {
  }

  onCreationStatus() {
    this.UserCreationStatus = 'Username telah dibuat!';
  }

  onUpdateServerName(event: Event) {
    this.UserName = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.UserName = '';
    this.UserCreationStatus = 'Username telah dibuat!';
  }
}

