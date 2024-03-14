import { Component } from '@angular/core';
import { Entity } from './interface/entity';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1-2f';
  entityList:Entity[]=[];
  constructor(private service:Service1Service){}
  getEntities():void{
    this.service.getEntities().subscribe(
      (entities) => {
        this.entityList = entities;
      }
      )
  }
}
