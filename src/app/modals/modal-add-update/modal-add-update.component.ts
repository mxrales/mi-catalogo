import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  accion: string;
  auto: Automovil = {} as Automovil;
  min: any;
  max: any;
  constructor(public activeModal: NgbActiveModal) { 
  }
  modeloMin(value){
    this.min = value;
    return this.min;
  } 
  modeloMax(value){
  this.max = value;
  return this.max;
  }
  ngOnInit(){
  }
  onSubmit(){
    this.activeModal.close(this.auto)
  }
}
