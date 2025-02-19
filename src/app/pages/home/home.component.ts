import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('todos/1').subscribe((res) => {
      console.log(res);
    });
  }
}
