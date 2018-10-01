import { Component } from '@angular/core';
import * as leaflet from '../../node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  click() {
    const geocodeService = leaflet.geocodeService();
    geocodeService.reverse()
      .latlng({ lat: 55.75399399999374, lng: 37.62209300000001 })
      .run(function (error, result) {
        console.log(result.address.Match_addr);
      });
  }
}
