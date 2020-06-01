import { Component, OnInit } from '@angular/core';

import { Automovil } from '../models';
import { templateJitUrl } from '@angular/compiler';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';
  
  constructor(private modalService: NgbModal, private autoService: AutosService) {

   }

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });
    
  }
  onSelect(auto: Automovil, modal){
    this.autoSeleccionado = auto;
    this.modalService.open(modal);
  }
  page = 1;
  pageSize = 10;
}
