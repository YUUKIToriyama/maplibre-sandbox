import "./style.scss";
import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
	container: "myMap",
	style: "https://tile.openstreetmap.jp/styles/osm-bright/style.json",
	center: [135.0, 35.0],
	zoom: 10,
	maxZoom: 18,
	minZoom: 0,
	accessToken: ""
});