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
	<div class="my-4 flex gap-2">
		{#each emergency.aidResources as aid}
			<AidBadge {aid} />
		{/each}
	</div>
	<div>{emergency.description}</div>

	<Map />

	<Timeline {emergency} />

	<h3>People's Requests for Aid</h3>
</div>
