<script lang="ts">
	import { onMount } from 'svelte';
	let mapContainer: HTMLDivElement;

	onMount(() => {
		// Ensure mapboxgl is available
		if (typeof mapboxgl !== 'undefined') {
			mapboxgl.accessToken =
				'pk.eyJ1IjoibmloaXIiLCJhIjoiY20zbDFsZjRlMGo0cDJuczh0a3FsdGs5ZiJ9.ZxWJ5KuzLvLsU49ftoVUgw';
			const map = new mapboxgl.Map({
				container: mapContainer, // use the bound element
				center: [-0.3763353, 39.4697065], // starting position [lng, lat]
				zoom: 9 // starting zoom
			});

			// Create a default Marker and add it to the map.
			new mapboxgl.Marker({ color: '#f87171', rotation: 25 })
				.setLngLat([-0.3687795, 39.4626631])
				.addTo(map);
			new mapboxgl.Marker({ color: '#60a5fa', rotation: -25 })
				.setLngLat([-0.3687795, 39.4626631])
				.addTo(map);

			// Create a default Marker, colored black, rotated 45 degrees.
			new mapboxgl.Marker({ color: '#facc15', rotation: 35 })
				.setLngLat([-0.5593448, 39.5147439])
				.addTo(map);
			new mapboxgl.Marker({ color: '#f87171', rotation: -35 })
				.setLngLat([-0.5593448, 39.5147439])
				.addTo(map);
			new mapboxgl.Marker({ color: '#4ade80', rotation: 0 })
				.setLngLat([-0.5593448, 39.5147439])
				.addTo(map);

			new mapboxgl.Marker({ color: '#4ade80', rotation: 35 })
				.setLngLat([-0.3731755, 39.4550991])
				.addTo(map);
			new mapboxgl.Marker({ color: '#60a5fa', rotation: -35 })
				.setLngLat([-0.3731755, 39.4550991])
				.addTo(map);
			new mapboxgl.Marker({ color: '#94a3b8', rotation: 0 })
				.setLngLat([-0.3731755, 39.4550991])
				.addTo(map);

			new mapboxgl.Marker({ color: 'black', rotation: 0 })
				.setLngLat([-0.4529588, 39.5187989])
				.addTo(map);
		} else {
			console.error('Mapbox GL JS is not loaded');
		}
	});
</script>

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.css" rel="stylesheet" />
	<script src="https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.js"></script>
</svelte:head>

<div bind:this={mapContainer} id="map" class="h-96"></div>
