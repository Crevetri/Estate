import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../../data/property';
import { PropertyRepository } from '../../repository/property-repository';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  property: Property|undefined = undefined;

  constructor(private propertyRepository: PropertyRepository, private route: ActivatedRoute) { }

  ngOnInit () : void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id != null ) {
      this.property = this.propertyRepository.getProperty(id);
    }
  }

  compareFunc(e1: Property, e2: Property): boolean {
    return e1 && e2 ? e1.type == e2.type : e1 == e2;
  }

  openImageSelector() {
    const inputImage = document.getElementById('inputImage') as HTMLInputElement;
    inputImage.click();
  }

  onImageChange(event: any) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      const imageURL = URL.createObjectURL(fileInput.files[0]);
      this.property!.path = imageURL;
    }
  }

}
