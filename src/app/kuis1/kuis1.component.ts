import { Component, OnInit } from '@angular/core';
import { DataBaseMhs } from'../shared/data-base-mhs';

@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  nim = '';
  nama = '';
  kls = '';
  data = '';

  dftrMhs:DataBaseMhs[] = [];
  mhs;

  constructor() { }
  ngOnInit() {
  }

  tambahMhs(){
    this.data = 'Data Mahasiswa';
    this.mhs = new DataBaseMhs(this.nim, this.nama, this.kls);
    this.dftrMhs.push(this.mhs);

    this.nim = '';
    this.nama = '';
    this.kls = '';
  }

}
