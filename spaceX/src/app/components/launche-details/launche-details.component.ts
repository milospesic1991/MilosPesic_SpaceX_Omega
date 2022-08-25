import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ILaunch } from 'src/app/models/launch';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launche-details',
  templateUrl: './launche-details.component.html',
  styleUrls: ['./launche-details.component.scss']
})
export class LauncheDetailsComponent implements OnInit {
  $launch?: Observable<ILaunch>;

  constructor(private ar: ActivatedRoute, private launchesService: LaunchesService) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params['id'];
    this.$launch = this.launchesService.getLaunch(id);
  }

}
