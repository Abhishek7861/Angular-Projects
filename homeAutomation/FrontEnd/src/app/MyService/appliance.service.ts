import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {
  appliances:any[] = new Array();

  constructor(private http: HttpClient) { }

  onGet(){
    return this.http.get("http://localhost:3000/appliance");
  }

  onDel(id:any){
    return this.http.delete("http://localhost:3000/appliance/"+id);
  }

  onPost(app:any){
    return this.http.post("http://localhost:3000/appliance/",app);
  }

  onPut(app:any,id:any){
    return this.http.put("http://localhost:3000/appliance/"+id,app);
  }
}
