import { Injectable } from '@angular/core';
import { PropertyRepository } from './property-repository';
import { Property } from '../data/property';

@Injectable({
  providedIn: 'any'
})
export class PropertyRepositoryDummyImplService extends PropertyRepository{
  estate = [
    {id: "1234", type: "Appartement", nbRoom: 4, cost: 100000, path:"../assets/img/appartement1.jpg"},
    {id: "456", type: "House", nbRoom: 4, cost: 120000, path:"../assets/img/maison1.jpg"},
    {id: "7890", type: "House", nbRoom: 7, cost: 300000, path:"../assets/img/maison2.jpg"},
    {id: "543", type: "Appartement", nbRoom: 5, cost: 110000, path:"../assets/img/appartement2.jpg"},
    {id: "876", type: "House", nbRoom: 5, cost: 140000, path:"../assets/img/maison3.jpg"}
]
  public get Estate() : Property[] {
    return this.estate
  }

  public getProperty(id: String): Property|undefined {
    return this.estate.find(property => property.id === id) as Property ;
    }

}
