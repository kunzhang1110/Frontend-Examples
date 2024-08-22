import { Component } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { User } from '../../ngrx/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-exp',
  standalone: true,
  imports: [CommonModule, TruncatePipe], // Add the pipe to imports
  templateUrl: './pipe-exp.component.html',
  styleUrl: './pipe-exp.component.scss',
})
export class PipeExpComponent {
  users$: Observable<User[]> | undefined;
  today: Date = new Date();
  value: number = 1234.567; 
  ratio: number = 0.4567; 
  
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.users$ = this._dataService.getUsers();
  }
}
