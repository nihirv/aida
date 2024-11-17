<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';

	let chart: Chart;
	let canvas: HTMLCanvasElement; // Reference to the <canvas> element

	// Data for the chart
	let labels = ['water', 'electricity', 'food', 'medical', 'blankets', 'rescue'];
	let data = [2, 1, 2, 2, 1, 1];

	onMount(() => {
		const ctx = canvas.getContext('2d');

		if (!ctx) return null;

		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Requests',
						data: data,
						backgroundColor: ['#facc15', '#4ade80', '#f87171', '#60a5fa', '#94a3b8', 'black'],
						borderColor: ['#facc15', '#4ade80', '#f87171', '#60a5fa', '#94a3b8', 'black'],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});

	// Clean up the chart when the component is destroyed
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<canvas bind:this={canvas} width="400" height="200"></canvas>

<style>
	canvas {
		max-width: 100%;
	}
</style>
