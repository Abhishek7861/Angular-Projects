import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApplianceService } from '../../MyService/appliance.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:number;
  applianceName: string;
  applianceRoom: string;
  applianceState: number;

  constructor(private http: HttpClient,
    public applianceService:ApplianceService) { }

  ngOnInit(): void {
    this.resetThis();
    this.initial();
  }

  resetThis(): void {
    this.id=0;
    this.applianceName = "";
    this.applianceRoom = "";
    this.applianceState = 0;
  }
  initial(){
      this.applianceService.onGet().subscribe((res)=>{
        this.applianceService.appliances = res as any[];
      });
  }

  ON(appliance:any){
    const app= {
      applianceName:appliance.applianceName,
      applianceRoom:appliance.applianceRoom,
      applianceState:1
    }
    this.applianceService.onPut(app,appliance._id).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  OFF(appliance:any){
    const app= {
      applianceName:appliance.applianceName,
      applianceRoom:appliance.applianceRoom,
      applianceState:0
    }
    this.applianceService.onPut(app,appliance._id).subscribe((res)=>{
      this.ngOnInit();
    })
  }
  EDIT(appliance:any){
    this.id = appliance._id;
    this.applianceName = appliance.applianceName;
    this.applianceRoom = appliance.applianceRoom;
  }
  DEL(appliance:any){
      this.applianceService.onDel(appliance._id).subscribe((res)=>{
        this.ngOnInit();
      })
  }

  onSubmit(){
    if(!this.id){
        const appliance= {
          applianceName:this.applianceName,
          applianceRoom:this.applianceRoom,
          applianceState:0
        }
        this.applianceService.onPost(appliance).subscribe((res)=>{
          this.ngOnInit();
        })
    }
    else{
      const appliance= {
        applianceName:this.applianceName,
        applianceRoom:this.applianceRoom,
        applianceState:this.applianceState,
      }
      this.applianceService.onPut(appliance,this.id).subscribe((res)=>{
        this.ngOnInit();
      })
    }
  }
}
