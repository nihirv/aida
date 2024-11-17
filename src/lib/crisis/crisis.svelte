<script lang="ts">
	import type { Emergency } from '$lib/fake-db/db';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { UsersRound } from 'lucide-svelte';
	import AidBadge from '$lib/badge/aid-badge.svelte';
	import Timeline from './timeline.svelte';
	import Map from './map.svelte';
	import BarChart from './bar-chart.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	export let emergency: Emergency;
	let galleryDiv: HTMLDivElement;

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: galleryDiv,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();
	});
</script>

<div class="-mt-12 space-y-8 p-8 pt-0">
	<div>
		<h2 class="m-0 flex items-center gap-2">
			<img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_the_Valencian_Community_(2x3).svg-RSokIez5hhahiLgSmQD1UKa0WgDLNW.png"
				alt="valencia flag"
				class="m-0 w-10"
			/>
			{emergency.name}
		</h2>
		<div class="text-muted-foreground">Last Updated: 16th November 2024, 10:31am</div>
	</div>
	<div class="flex items-center gap-3">
		<span><img src={emergency.priority} class="m-0 size-6 object-contain" alt="priority" /></span>
		<span class="flex items-center gap-1">
			<UsersRound class="size-4" />
			{emergency.numPeople}
		</span>
	</div>

	<div>
		<h3>People's Requests for Aid</h3>
		<BarChart />
	</div>

	<div>{emergency.description}</div>

	<Tabs.Root value="map">
		<Tabs.List>
			<Tabs.Trigger value="map">Aid Requests</Tabs.Trigger>
			<Tabs.Trigger value="safe-zone">Safety Zones</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="map">
			<Map />
		</Tabs.Content>
		<Tabs.Content value="safe-zone">
			<img
				src="https://media.discordapp.net/attachments/1307258455748378684/1307676986159796264/Screenshot_2024-11-17_at_12.01.09.png?ex=673b2c98&is=6739db18&hm=f2213afc7578e6b151fb2702934189441aaa8b1c0f158660653b15354ffa6ea0&=&format=webp&quality=lossless&width=840&height=934"
			/>
		</Tabs.Content>
	</Tabs.Root>

	<Timeline {emergency} />
</div>
