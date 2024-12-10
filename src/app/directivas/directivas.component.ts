import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
// Está logueado o no el usuario
usuario_logueado = true;
// Listado de empleado id, nombre, sueldo, activo 
empleados = [
  {id: 1, nombre: 'Juan', sueldo: 1000, activo: true},
  {id: 2, nombre: 'Ana', sueldo: 2000, activo: false},
  {id: 3, nombre: 'Pedro', sueldo: 3000, activo: true},
  {id: 4, nombre: 'Maria', sueldo: 4000, activo: false},
  {id: 5, nombre: 'Luis', sueldo: 5000, activo: true},
  {id: 6, nombre: 'Carlos', sueldo: 6000, activo: false},
  {id: 7, nombre: 'Jose', sueldo: 7000, activo: true},
  {id: 8, nombre: 'Lucia', sueldo: 8000, activo: false},
  {id: 9, nombre: 'Marta', sueldo: 9000, activo: true},
  {id: 10, nombre: 'David', sueldo: 10000, activo: false}
]
}