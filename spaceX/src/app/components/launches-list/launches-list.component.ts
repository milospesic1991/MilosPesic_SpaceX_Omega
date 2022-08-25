import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent implements OnInit {
  $launches!: Observable<any>;

  constructor(private launchesService: LaunchesService, private router: Router) { }

  ngOnInit(): void {
    this.$launches = this.launchesService.getLaunches();
  }

  routeToDetails(id: number) {
    this.router.navigate(['launche', id])
  }

}
