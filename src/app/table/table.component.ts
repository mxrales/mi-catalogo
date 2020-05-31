import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';
  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }
  page = 1;
  pageSize = 4;
  collectionSize = AUTOMOVILES.length;

 
}
