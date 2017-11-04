import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http,Headers } from '@angular/http'
@Injectable()
export class LugaresService {

  API_ENDPOINT = 'https://platzisquare-1509727006586.firebaseio.com';
  lugares:any = [
    { id:1, plan:'pagado', cercania:1, distancia:1, active:true, nombre:'Floreria la gardenia', description: 'Descripción de Floreria la gardenia, mas adelante tendremos mas información' },
    { id:2, plan:'gratis', cercania:1, distancia:1, active:true, nombre:'Donas la pasadita', description: 'Descripción de Donas la pasadita, mas adelante tendremos mas información' },
    { id:3, plan:'pagado', cercania:1, distancia:1, active:true, nombre:'Veterinaria Huellitas Felices', description: 'Descripción de Veterinaria Huellitas Felices, mas adelante tendremos mas información' },
    { id:4, plan:'pagado', cercania:1, distancia:1, active:true, nombre:'Zapateria el clavo', description: 'Descripción de Zapateria el clavo, mas adelante tendremos mas información' },
    { id:5, plan:'gratis', cercania:2, distancia:1, active:true, nombre:'Colegio Bolivariano', description: 'Descripción de Colegio Bolivariano, mas adelante tendremos mas información' }
  ]

  constructor(private afDB: AngularFireDatabase, private http: Http) { }

  public getLugares(){
    //CON SOCKETS
    return this.afDB.list('lugares/').valueChanges();

    //CON HTTP
    //return this.http.get(`${this.API_ENDPOINT}/lugares.json`)
  }

public buscarLugar(id){
    return this.lugares.filter( (lugar) => {
      return lugar.id == id
    })[0] || null;
  }

  public guardarLugar(lugar){
    //GUARDAR CON SOCKETS
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

    //GUARDAR CON HTTP
/*     const headers = new Headers({ 'Content-Type':'application/json' })
    return this.http.post(`${this.API_ENDPOINT}/lugares.json`,lugar, { headers: headers }); */
  }

  public editarLugar(lugar){
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeodata(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colomb%C3%ADa
    return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`)
  }

  public getLugar(id){
    return this.afDB.object(`lugares/${id}`).valueChanges()
  }

}
