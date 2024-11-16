<script lang="ts">
	import { onMount } from 'svelte';

	let map: google.maps.Map;
	let mapContainer: HTMLElement;

	onMount(() => {
		if (typeof window !== 'undefined') {
			((g) => {
				var h,
					a,
					k,
					p = 'The Google Maps JavaScript API',
					c = 'google',
					l = 'importLibrary',
					q = '__ib__',
					m = document,
					b = window;
				b = b[c] || (b[c] = {});
				var d = b.maps || (b.maps = {}),
					r = new Set(),
					e = new URLSearchParams(),
					u = () =>
						h ||
						(h = new Promise(async (f, n) => {
							await (a = m.createElement('script'));
							e.set('libraries', [...r] + '');
							for (k in g)
								e.set(
									k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
									g[k]
								);
							e.set('callback', c + '.maps.' + q);
							a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
							d[q] = f;
							a.onerror = () => (h = n(Error(p + ' could not load.')));
							a.nonce = m.querySelector('script[nonce]')?.nonce || '';
							m.head.append(a);
						}));
				d[l]
					? console.warn(p + ' only loads once. Ignoring:', g)
					: (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
			})({
				key: 'AIzaSyBZpeg7fGxDbgPavEFhW02xb9jyeMPw3lk',
				v: 'weekly'
				// Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
				// Add other bootstrap parameters as needed, using camel case.
			});

			async function initMap(): Promise<void> {
				const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
				map = new Map(mapContainer, {
					center: { lat: -34.397, lng: 150.644 },
					zoom: 8
				});
			}

			initMap();
		}
	});
</script>

<div>Map View</div>

<div bind:this={mapContainer} class="h-[90vh] w-screen"></div>
