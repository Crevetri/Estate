import { Component, OnInit } from '@angular/core';
import { Property } from '../../data/property';
import { PropertyRepository } from '../../repository/property-repository';


@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss'],
})
export class EstateComponent  implements OnInit {
  estate!: Property[];

  constructor(private propertyRepository: PropertyRepository) { }

  ngOnInit() {
    this.estate = this.propertyRepository.estate;
  }

}
