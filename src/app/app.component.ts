import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular001';
  public listdeVideos:any = [];

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('./assets/data.json').subscribe(respuesta =>{
      this.listdeVideos = respuesta;
    });
  }

}
