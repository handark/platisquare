import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lat:number = 6.2645875;
  lng:number = -75.5917091;
  lugares:any = []

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe( lugares => {
        //debugger;
        this.lugares = lugares;
      }, error => {
        console.error(error);
      })
  }

  ngOnInit() {
  }

}
