import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Computador } from '../../models/computador';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  computadores : Computador[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getComputadores(1).subscribe(
      (pcs) => { this.computadores = pcs}
    )
  }

}
