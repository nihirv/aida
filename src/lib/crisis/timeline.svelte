<script lang="ts">
	import type { Emergency } from '$lib/fake-db/db';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';

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

<div class="not-prose">
	<ol class="relative border-s border-gray-200 dark:border-gray-700">
		<li class="mb-10 ms-2">
			<div class="rounded-lg bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
				<div class="mb-3 items-center justify-between sm:flex">
					<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
						>2 hours ago</time
					>
					<div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
						Yvonne from <a
							href="#"
							class="font-semibold text-gray-900 hover:underline dark:text-white"
						>
							Carrer de Rafael Cort
						</a>
					</div>
				</div>
				<div
					class="rounded-lg bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300"
				>
					We’ve gathered a few survivors in a nearby shelter, but we don’t have enough supplies.
					Cars are flooded here so we have no transport out. Can someone send clean drinking water
					and basic medical kits here urgently?
				</div>
				<div>
					<img src="/spain-flood/spain_flood3.png" class="rounded-lg" />
				</div>
			</div>
		</li>

		<li class="mb-10 ms-2">
			<div class="rounded-lg bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
				<div class="mb-3 items-center justify-between sm:flex">
					<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
						>2 hours ago</time
					>
					<div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
						Xaiver from <a
							href="#"
							class="font-semibold text-gray-900 hover:underline dark:text-white"
							>Camino de la Cova de Mirapeix</a
						>
					</div>
				</div>
				<div
					class="rounded-lg bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300"
				>
					I’m alone, and the power is out. I don’t have enough medication or food to last much
					longer. Please, can someone come and check on us here?
				</div>
				<div>
					<img src="/spain-flood/spain_flood2.jpg" class="rounded-lg" />
				</div>
			</div>
		</li>

		<li class="mb-10 ms-2">
			<div class="rounded-lg bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
				<div class="mb-3 items-center justify-between sm:flex">
					<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
						>2 hours ago</time
					>
					<div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
						Earl from <a
							href="#"
							class="font-semibold text-gray-900 hover:underline dark:text-white"
							>Carrer del Plus Ultra</a
						>
					</div>
				</div>
				<div
					class="rounded-lg bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300"
				>
					The bridge near us has collapsed, and we’re stranded. We need food, clean water, and
					blankets for the kids. Can someone help us get supplies?
				</div>
				<div>
					<img src="/spain-flood/spain_flood1.png" class="rounded-lg" />
				</div>
			</div>
		</li>

		<li class="mb-10 ms-2">
			<div class="rounded-lg bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
				<div class="mb-3 items-center justify-between sm:flex">
					<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
						>2 hours ago</time
					>
					<div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
						Simone from <a
							href="#"
							class="font-semibold text-gray-900 hover:underline dark:text-white">Calle Oller</a
						>
					</div>
				</div>
				<div
					class="rounded-lg bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300"
				>
					Our home is completely cut off. We need immediate evacuation assistance, especially for my
					elderly parents who can’t walk long distances. Please send boats or rescue teams!
				</div>
			</div>
		</li>

		<li class="mb-10 ms-2">
			<div
				class="items-center justify-between rounded-lg bg-white p-4 shadow-sm sm:flex dark:border-gray-600 dark:bg-gray-700"
			>
				<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time
				>
				<div class="text-sm font-normal text-gray-500 dark:text-gray-300">
					<div class="flex items-center gap-2">
						<img src="/p3.png" class="size-6 object-contain" alt="p3" />Flooding Identified
					</div>
					<div class="pswp-gallery flex gap-2" bind:this={galleryDiv} id="gallery">
						{#each emergency.latestImages as imageObj}
							<a
								href={imageObj.imageUrl}
								data-pswp-width={imageObj.width}
								data-pswp-height={imageObj.height}
								target="_blank"
							>
								<div>
									<img src={imageObj.imageUrl} alt="emergency" class="mt-1 size-28 rounded" />
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</li>
		<li class="mb-10 ms-2">
			<div class="rounded-lg bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
				<div class="items-center justify-between sm:flex">
					<time class="text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
					<div class="lex text-sm font-normal text-gray-500 dark:text-gray-300">
						Normal Activity
					</div>
				</div>
			</div>
		</li>
	</ol>
</div>
