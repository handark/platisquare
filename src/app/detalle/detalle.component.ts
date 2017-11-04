import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  lugares:any = []
  id = null;
  lugar:any = {}

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }

  ngOnInit() {
  }

  buscarLugar(){
    return this.lugares.filter( (lugar) => {
      return lugar.id == this.id
    })[0] || null;
  }

}
