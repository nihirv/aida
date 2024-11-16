<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const map = {
		Flood: 'lightblue',
		Conflict: 'red',
		Fire: 'orange'
	};
	export let crisis: keyof typeof map;
</script>

<Badge style="background-color: {map[crisis]};">{crisis}</Badge>
