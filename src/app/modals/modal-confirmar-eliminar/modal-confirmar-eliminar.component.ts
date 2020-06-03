import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-confirmar-eliminar',
  templateUrl: './modal-confirmar-eliminar.component.html',
  styleUrls: ['./modal-confirmar-eliminar.component.css']
})
export class ModalConfirmarEliminarComponent implements OnInit {
  mensaje: string;
  auto: Automovil = {} as Automovil;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
