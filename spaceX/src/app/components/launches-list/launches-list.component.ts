import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  form: any = "11:20";

  constructor(private fb: FormBuilder, private launchesService: LaunchesService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'time': new FormControl()
    })
    this.$launches = this.launchesService.getLaunches();
  }

  routeToDetails(id: number) {
    this.router.navigate(['launche', id])
  }

  mask = (rawValue: any) => {
    let secondParam = /\d/;
    if (rawValue && (rawValue[0] == '0' || rawValue[0] == '1')) {
      secondParam = /[0-9]/;
    } else if (rawValue && rawValue[0] == '2') {
      secondParam = /[0-3]/;
    }
    return [/[0-2]/, secondParam, ':', /[0-5]/, /[0-9]/];
  }

  print() {
    console.log(this.form.value)
  }
}
