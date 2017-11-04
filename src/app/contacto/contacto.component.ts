import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lat:number = 6.2645875;
  lng:number = -75.5917091;

  constructor() { }

  ngOnInit() {
  }

}
