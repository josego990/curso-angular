import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-angular';
  dataSource: any;
  displayedColumns: string[] = ['id', 'type', 'label'];

  submitForm() {
    console.log('BOTONAZO!');
  }
}
