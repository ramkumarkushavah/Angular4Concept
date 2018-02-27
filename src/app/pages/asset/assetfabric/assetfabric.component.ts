import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

// declare let ol;

declare let $;

import * as ol from 'openlayers';

@Component({
  selector: 'app-assetfabric',
  templateUrl: './assetfabric.component.html',
  styleUrls: ['./assetfabric.component.css']
})
export class AssetfabricComponent implements OnInit, AfterViewInit {
  divTrueFalseA: boolean = false;
  assetData: boolean = true;
  constructor(public CommonService: CommonService) { 

    this.CommonService.commonEmitter.subscribe(divTrueFalse => {
      this.divTrueFalseA = divTrueFalse;
      console.log("divTrueFalse Data is : ", this.divTrueFalseA);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.openlayermap();
    

  }
  openlayermap() {
    this.assetData = !this.assetData;
    var map = new ol.Map({
      target: 'asset-main-div',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      }),
      // renderer:'canvas'
    });
  }
}


