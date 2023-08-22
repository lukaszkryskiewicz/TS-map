interface MarkerType {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(markerType: MarkerType): void{
    new google.maps.Marker({
      map: this.googleMap,
      position: markerType.location
    })
  }


}