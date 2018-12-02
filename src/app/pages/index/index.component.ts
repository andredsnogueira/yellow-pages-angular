import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterContentInit
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { RequestService } from 'src/app/core/services/request.service';
import { environment } from 'src/environments/environment';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  companies: any;
  companiesSelect: any;
  p = 1;
  map: mapboxgl.Map;

  @ViewChild('mapbox') mapbox: ElementRef;
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
      this.companies.forEach(element => {
        // TODO: Missing backend longitude and latitude information
        new mapboxgl.Marker().setLngLat([-8, 39.6]).addTo(this.map);
      });
      this.map.addControl(new mapboxgl.NavigationControl());
    });
    this.request.getLocations().subscribe(res => (this.companiesSelect = res));
  }
}
