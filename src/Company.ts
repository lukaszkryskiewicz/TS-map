import { faker } from "@faker-js/faker";
import { MarkerType } from "./CustomMap";

export class Company implements MarkerType {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;


  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng:  faker.location.longitude(),
    }
    this.color='green'
  }

  content() : string {
    return `Company name is <h1>${this.companyName}</h1>`
  }

}