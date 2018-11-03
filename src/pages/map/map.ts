import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';
import L, { LatLngExpression } from 'leaflet';
// import * as mapmarker from './map.js';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  loading;
  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private gl: Geolocation) {
    /**
     * Map takes a bit to load once the page is opened. 
     * So we show a loading spinner to the user until the map is completely loaded.
     * We use Ionic's loading controller. Link: https://ionicframework.com/docs/api/components/loading/LoadingController/
     */
    this.presentLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    var planes = [
      ["User1",29.96497,76.86808],
      ["User2",29.96269,76.86696],
      ["User3",29.96413,76.8621],
      ["User4",29.96585,76.86659],
      ["User5",29.96163,76.86726],
      ["User6",29.9683,76.86081],
      ["User7",29.96079,76.8683],
      ["User8",29.96414,76.86632],
      ["User9",29.96285,76.86274]
      ];
    // var planes = [
    //   {lat: 30.99497, lng: 76.50808},
    //   {lat: 31.30269, lng: 76.63696}
    // ];
    var map  = L.map("map").fitWorld();

    /**
     * Apparently you don't need any tokens to use the maps. 
     */
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 20
    }).addTo(map);
    var mylat,mylng;
    map.locate({
      setView: true, 
      maxZoom: 18
    })
    .on('locationfound', (e) => {
      this.loading.dismiss(); //Stop showing the loading spinner once the map is loaded.
      const { lat, lng } = e.target.getCenter();
      mylat = lat;
      mylng = lng;
      console.log(mylat + " " + mylng);
      let markerGroup = L.featureGroup();
      let marker: any = L.marker([lat,lng])
      .bindPopup('My Location');
      // .openPopup()
      // .on('click',() => {
        // alert("hey there");
        // alert(lat);
        // alert(lng);
      // })
      // marker.draggable = true;
      markerGroup.addLayer(marker);
      // marker = L.marker([29,77])
      // markerGroup.addLayer(marker);
      map.addLayer(markerGroup);
      

      // console.log(lat);
      }).on('locationerror', (err) => {
        alert("error");
    })
    // console.log(mylat + " " + mylng);
    // console.log("coming here");
    // L.marker([29.9605, 76.865]).addTo(map)
    // .bindPopup('Location of<br>another user');

    for (var i = 0; i < planes.length; i++) {
      var l1 = planes[i][1];
      var l2 = planes[i][2];
			L.marker([<number>l1,<number>l2])
				.bindPopup(<string>planes[i][0])
				.addTo(map);
    }

    // map.on('click', function(ev){
    //   var latlng = map.mouseEventToLatLng(ev.originalEvent);
    //   console.log(latlng.lat + ', ' + latlng.lng);
    // });

    // map.on('click', function(e){

    map.on('click', <LeafletMouseEvent>(e) => {
      // var coord = e.target.getCenter(1);
      var coord = e.latlng;
      // var lat = Math.round(coord.lat*100)/100;
      // var lng = Math.round(coord.lng*100)/100;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("Click at latitude: " + lat + " and longitude: " + lng);
      // alert("You clicked the map at latitude: "+lat+" and longitude: "+lng);
      findNearestMarker(coord);
      });

    // var coords = [{ lat:60.1697, lng:24.8292},
    //   { lat: 60.1704, lng: 24.8285 },
    //   { lat: 60.1709, lng: 24.8277 },
    //   { lat: 60.1700, lng: 24.8265 },
    // { lat:60.1700, lng: 24.8283}];
    
    function findNearestMarker(coords) {
      var minDist = 1000,
        nearest_text = '*None*',
        markerDist;
        var nearest = [];
      
      // iterate over objects and calculate distance between them
      for (var i = 0; i < planes.length; i += 1) {
        // markerDist = objects[i].getPosition().distance(coords);
        var latlng = L.latLng(<number>planes[i][1],<number>planes[i][2])
        markerDist = L.latLng(coords).distanceTo(latlng);
        if (markerDist < minDist) {
          minDist = markerDist;
          nearest_text = <string>planes[i][0];
        }
        var text = <string>planes[i][0];
        if(markerDist<100){
          nearest.push(text);
          // alert("Marker within 200 metres is/are: " + text);
        }
      }
      // nearest.sort();
      console.log("Nearest 100 metre markers are: " + nearest.length);
      for(var i = 0; i<nearest.length; i++){
        console.log(nearest[i]);
      }
      console.log("The nearest marker is " + nearest_text);
      // alert('The nearest marker is: ' + nearest_text);
      // console.log(mylat + " " + mylng);
    }

  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading map...'
    });

    this.loading.present();
  }
}