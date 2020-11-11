import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Docente } from 'src/app/models/docente';
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  // private API_SERVER = "http://localhost:8080/docentes/";
  constructor(private httpClient: HttpClient) { }


  public getAllDocentes(): Observable<any>{
    return this.httpClient.get(environment.API_SERVER+'docentes/');
  }
  public findById(id): Observable<Docente>{
    return this.httpClient.get<Docente>(environment.API_SERVER+'docentes/'+id);
  }
  public findByCargo(cargo): Observable<Docente>{
    return this.httpClient.get<Docente>(environment.API_SERVER+'docentes/docente-cargo/'+cargo);
  }
  public getAllDocenteByEspecialidad(id_especialidad): Observable<Docente>{
   
    return this.httpClient.get<Docente>(environment.API_SERVER+'docentes/programas-estudio/'+id_especialidad);
  }
}
