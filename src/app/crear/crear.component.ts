import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  lugar:any = {};
  id:any = null;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if(this.id != 'nuevo'){
      lugaresService.getLugar(this.id)
        .subscribe( lugar => {
          this.lugar = lugar;
        })
    }
  }

  ngOnInit() {
  }

  guardarLugar(){
    let direccion = `${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`;
    this.lugaresService.obtenerGeodata(direccion)
      .subscribe( geodata => {
        //debugger;
        this.lugar.lat = geodata.json().results[0].geometry.location.lat;
        this.lugar.lng = geodata.json().results[0].geometry.location.lng;

        if(this.id != 'nuevo'){
          this.lugaresService.editarLugar(this.lugar);
          alert('Negocio editado con éxito!');
        }else{
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('Negocio creado con éxito!');
        }


        this.lugar = {};
      })
  }

}
