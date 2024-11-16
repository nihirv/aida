<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { emergencies } from '$lib/fake-db/db';
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Priority</Table.Head>
			<Table.Head>Number of People Affected</Table.Head>
			<Table.Head>Aid Resources Required</Table.Head>
			<Table.Head>Description</Table.Head>
			<Table.Head class="text-right">Latest Images</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each emergencies as e}
			<Table.Row>
				<Table.Cell class="font-medium">{e.name}</Table.Cell>
				<Table.Cell>{e.priority}</Table.Cell>
				<Table.Cell>{e.numPeople}</Table.Cell>
				<Table.Cell>{e.aidResources.join(',')}</Table.Cell>
				<Table.Cell>{e.description}</Table.Cell>
				<Table.Cell class="size-10"><img src={e.latestImages[0]} alt="emergency" /></Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
