import {faker} from '@faker-js/faker';
import { MarkerType } from './CustomMap';

export class User implements MarkerType {
name: string;
location: {
  lat: number;
  lng: number;
};
color: string;


constructor(){
this.name = faker.person.firstName();
this.location = {
  lat: faker.location.latitude(),
  lng: faker.location.longitude()
}
this.color = 'blue'
}

content() : string {
  return `User name is ${this.name}`
}
}