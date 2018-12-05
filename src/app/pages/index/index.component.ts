import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { RequestService } from 'src/app/core/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  companies: any;
  companiesSelect: any;
  popularCompanies: any;
  mapMarkers: Array<any> = [];
  p = 1;
  map: mapboxgl.Map;

  @ViewChild('mapbox') mapbox: ElementRef;
  @ViewChild('companyName') companyName: ElementRef;
  @ViewChild('companyLocation') companyLocation: ElementRef;

  constructor(private request: RequestService) {}

  ngOnInit() {
    mapboxgl.accessToken = environment.mapboxApiKey;
    this.request.getCompanies().subscribe(res => {
      this.companies = res;
      this.map = new mapboxgl.Map({
        container: this.mapbox.nativeElement,
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-8, 39.6],
        zoom: 6
      });
      this.drawMapMarkers();
      this.map.addControl(new mapboxgl.NavigationControl());
    });
    this.request.getLocations().subscribe(res => (this.companiesSelect = res));
    this.request
      .getMostPopularCompanies()
      .subscribe(res => (this.popularCompanies = res));
  }

  drawMapMarkers() {
    this.removeMapMarkers();
    this.companies.forEach(element => {
      // TODO: Missing backend longitude and latitude information
      if (element.lng && element.lat) {
        this.mapMarkers.push(
          new mapboxgl.Marker().setLngLat([-8, 39.6]).addTo(this.map)
        );
      }
    });
    console.log(this.mapMarkers);
  }

  removeMapMarkers() {
    this.mapMarkers.forEach(element => {
      element.remove();
    });
    this.mapMarkers.length = 0;
  }

  companyPage(id) {
    this.request.getCompany(id).subscribe();
  }

  searchCompanies() {
    this.request
      .getSearchedCompanies(
        this.companyName.nativeElement.value,
        this.companyLocation.nativeElement.value
      )
      .subscribe(res => {
        this.companies = res;
        this.drawMapMarkers();
      });
  }
}
