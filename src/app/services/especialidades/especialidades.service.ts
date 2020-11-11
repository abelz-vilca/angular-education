import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  private API_SERVER = "http://localhost:8080/especialidades/";

  constructor(private httpClient: HttpClient) {}
  

  public getAllEspecialidades(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
  public getAllEspecialidadesByEscuela(idEscuela): Observable<any>{
   
    return this.httpClient.get(this.API_SERVER+idEscuela);
  }
}
