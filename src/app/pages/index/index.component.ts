import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  @ViewChild('mapbox') mapbox: ElementRef;
  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVkc25vZ3VlaXJhIiwiYSI6ImNqbjNqZzNlYzM3ZXczd3F5bDJycXo5aDkifQ.MK240i6LWCg0qBmkwapzig';
  }

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      container: this.mapbox.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

}
