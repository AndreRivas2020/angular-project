import { Component } from '@angular/core';
import { Delivery } from '../data/delivery'; 
import { DeliveryService } from '../service/delivery.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css']
})
export class DeliveryOrderComponent {
  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@(gmail.com|outlook.com)$')]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  button() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  deliveriesSize:Number;
  newDelivery: Delivery;

  constructor(private deliveryServices:DeliveryService, private router:Router){
    this.deliveriesSize = deliveryServices.getDeliveriesSize();
    this.newDelivery = new Delivery();
    
  }

  public saveNewDeliveryOrder(){
    this.deliveryServices.setNewDelivery(this.newDelivery);
    this.newDelivery = new Delivery();
    this.deliveriesSize = this.deliveryServices.getDeliveriesSize();
  }

  public goToOrderList(){
   this.router.navigate(['delivery-list']);
  }
}
