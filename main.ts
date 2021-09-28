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

const popup = new maplibregl.Popup({
	closeButton: false
});
map.on("click", event => {
	const features = map.queryRenderedFeatures(event.point, {
		layers: ['poi-level-3', 'poi-level-2', 'poi-level-1']
	});
	console.log(features);
	if (features.length > 0) {
		const popupContent = createDivContent(features[0]);
		popup.setDOMContent(popupContent).setLngLat(event.lngLat).addTo(map);
	}
});

const createDivContent = (feature: any): HTMLDivElement => {
	const div = document.createElement("div");
	const table = document.createElement("table");
	Object.keys(feature.properties).forEach(id => {
		const tr = document.createElement("tr");
		const td1 = document.createElement("td");
		td1.innerHTML = id;
		tr.appendChild(td1);
		const td2 = document.createElement("td");
		td2.innerHTML = feature.properties[id];
		tr.appendChild(td2);
		table.appendChild(tr);
	});
	div.appendChild(table);
	return div;
}