import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-angular';
  dataSource: any;
  displayedColumns: string[] = ['id_producto', 'nombre', 'descripcion'];

  submitForm() {
    console.log('BOTONAZO!');
  }

  getProducts() {
    console.log('BOTONAZO GET PRODUCTS!');
    const apiUrl = 'http://3.82.197.47:3030/get-product-by-id';
    let datas = { id_producto: 66 };

    axios
      .post(apiUrl, datas)
      .then((response: any) => {
        // La consulta fue exitosa, puedes acceder a los datos en response.data
        console.log('Datos recibidos:', response.data);
        this.dataSource = response.data;
      })
      .catch((err: any) => {
        // Ocurrió un error al realizar la consulta
        console.error('Error al realizar la consulta:', err);
      });
  }
}
