export interface MarkerType {
  location: {
    lat: number;
    lng: number;
  };
  content(): string;
  color: string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: markerType.location,
    })

    marker.addListener('click', ()=> {
      const infoWindow = new google.maps.InfoWindow({
        content: markerType.content(),
      })

      infoWindow.open(this.googleMap, marker);
    })

    marker.setIcon(`https://maps.google.com/mapfiles/ms/icons/${markerType.color}-dot.png`)
  }


}