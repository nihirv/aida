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

<div class="space-y-8 p-8 pt-0 -mt-12">
	<h2 class="m-0">{emergency.name}</h2>
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
