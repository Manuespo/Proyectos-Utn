import { Component, OnInit } from '@angular/core';
import { ITravel } from 'src/app/core/entity';
import { Travel } from 'src/app/core/models.module';
import { ApiTravelService } from 'src/app/core/services/api-travel.service';

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css']
})

export class ListTravelComponent implements OnInit {
  listaViajes: ITravel[] = [];

  ngOnInit(): void { this.mostrarClientes() }
  constructor(private travelService: ApiTravelService) { }
  mostrarClientes() {
    this.travelService.getsTravel().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaViajes = resp;
      }, error: (error) => { console.log('El tipo de error es: ' + error); }
    })
  }
  mostrarMensaje(viaje:ITravel) {
    console.log('Se hizo clic en el destino: \n\n'
    + 'Provincia: '+ viaje.provincia + '\n'
    + 'Lugar: '+ viaje.lugar + '\n'
    + 'Descripcion: '+ viaje.descripcion + '\n'
    + 'Actividades: '+ viaje.actividades_que_se_realizan + '\n'
    
    );
  }
}
