import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ModalConfirmarEliminarComponent } from '../modals/modal-confirmar-eliminar/modal-confirmar-eliminar.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  auto: Automovil = {} as Automovil;
  autoSeleccionado: Automovil;
  closeResult = '';



  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(){
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });
  }
  page = 1;
  pageSize = 10;

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe();
      }
    )
  }
  
  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.accion = 'Agregar';
    modalRef.result.then(
      (auto)=>{
        this.autoService.addAuto(auto).subscribe();
      }
    )
  }
  openModalConfirmarEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalConfirmarEliminarComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp)=>{
        this.autoService.deleteAuto(autoTemp).subscribe();
      }
    )
  }
  



}
