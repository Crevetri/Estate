import { Component, Input } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Property } from '../../data/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {

  @Input() property !: Property;

  constructor (private router: Router, private route: ActivatedRoute) { }

  navigation() {
    this.router.navigate(['../details', {id: this.property.id}], {relativeTo: this.route});
  }
}
