<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const map = {
		shelter: '#a18072',
		electricity: '#facc15',
		food: '#4ade80',
		water: '#60a5fa',
		medical: '#f87171',
		transport: '#a8a29e'
	};
	export let aid: keyof typeof map;
</script>

<Badge style="background-color: {map[aid]};" class="text-black">{aid}</Badge>
