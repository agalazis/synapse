import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngf-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  pages = [
    {
      path: '/promotion',
      hint: 'SMS Promotion UI',
      label: 'SMS Promotion',
    },
    {
      link: '/api-explorer',
      hint: 'Synapse SMS Promotion Api Docs',
      label: 'Api Docs'
    }
  ];
}
