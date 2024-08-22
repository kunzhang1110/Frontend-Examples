import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_PATHS } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly ROUTE_PATHS = ROUTE_PATHS;
}
