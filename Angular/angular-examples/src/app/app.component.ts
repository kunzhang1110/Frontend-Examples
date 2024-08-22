import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgrxModule } from './ngrx/ngrx.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ROUTE_PATHS } from './app.routes';
import { ChangeDetectionExpComponent } from './basics/change-detection-exp/change-detection-exp.component';
import { LifeCycleExpComponent } from './basics/life-cycle-exp/life-cycle-exp.component';
import { TruncatePipe  } from './basics/pipe-exp/truncate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgrxModule,
    ReactiveFormsModule,
    HomeComponent,
    LifeCycleExpComponent,
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly ROUTE_PATHS = ROUTE_PATHS;

  title = 'angular_examples';
}
