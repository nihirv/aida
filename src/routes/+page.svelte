<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import List from '$lib/list-view/list.svelte';
	import Map from '$lib/map-view/map.svelte';
</script>

<Tabs.Root value="list" class="w-full">
	<Tabs.List>
		<Tabs.Trigger value="list">List</Tabs.Trigger>
		<Tabs.Trigger value="map">Map</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="list"><List /></Tabs.Content>
	<Tabs.Content value="map"><Map /></Tabs.Content>
</Tabs.Root>
