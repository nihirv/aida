<script lang="ts">
	import type { Emergency } from '$lib/fake-db/db';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { UsersRound } from 'lucide-svelte';
	import AidBadge from '$lib/badge/aid-badge.svelte';

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

<div class="p-8 pt-0">
	<h2>{emergency.name}</h2>
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

	<div>
		<h3>Distress Comments</h3>
		<div class="space-y-4">
			{#each emergency.userComments as uc}
				<div class="bg-accent space-y-3 rounded-lg p-2">
					<div>{uc.comment}</div>
					<div class="flex justify-between text-xs">
						<span>{uc.name} ({uc.location})</span><span>{uc.date}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<h3>Uploaded Images</h3>
		<div class="pswp-gallery pswp-gallery--single-column" bind:this={galleryDiv} id="gallery">
			<Carousel.Root
				opts={{
					align: 'start'
				}}
				class="ml-12 mr-12 w-full"
			>
				<Carousel.Content>
					{#each emergency.userImages as imageObj}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<div class="text-muted-foreground text-sm">{imageObj.date}</div>
							<a
								href={imageObj.imageUrl}
								data-pswp-width={imageObj.width}
								data-pswp-height={imageObj.height}
								target="_blank"
							>
								<div>
									<img src={imageObj.imageUrl} alt="emergency" class="mt-1" />
								</div>
							</a>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>
	</div>

	<div>
		<h3>Satellite Images</h3>

		<div class="pswp-gallery pswp-gallery--single-column" bind:this={galleryDiv} id="gallery">
			<Carousel.Root
				opts={{
					align: 'start'
				}}
				class="ml-12 w-full"
			>
				<Carousel.Content>
					{#each emergency.latestImages as imageObj}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<div class="text-muted-foreground text-sm">{imageObj.date}</div>
							<div class="text-muted-foreground text-sm">{imageObj.extra}</div>
							<a
								href={imageObj.imageUrl}
								data-pswp-width={imageObj.width}
								data-pswp-height={imageObj.height}
								target="_blank"
							>
								<div>
									<img src={imageObj.imageUrl} alt="emergency" class="mt-1" />
								</div>
							</a>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>
	</div>

	<h3>People's Requests for Aid</h3>
</div>
