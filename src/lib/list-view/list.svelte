<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import * as Resizable from '$lib/components/ui/resizable';
	import { emergencies } from '$lib/fake-db/db';
	import Crisis from '$lib/crisis/crisis.svelte';
	import Badge from '$lib/badge/crisis-badge.svelte';
	import { UsersRound } from 'lucide-svelte';
	import AidBadge from '$lib/badge/aid-badge.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Dialog from '$lib/components/ui/dialog';
	import Container from '$lib/crisis/container.svelte';
	import { Progress } from '$lib/components/ui/progress';

	let selectedCrisis = $state(emergencies[0]);
</script>

<div class="space-y-8">
	<Resizable.PaneGroup direction="horizontal" class="min-h-[200px] rounded-lg border">
		<Resizable.Pane defaultSize={60}>
			<Table.Root class="m-0">
				<Table.Header class="bg-muted">
					<Table.Row>
						<Table.Head class="py-4">Priority</Table.Head>
						<Table.Head class="py-4">Crisis</Table.Head>
						<Table.Head class="py-4">Affected</Table.Head>
						<Table.Head class="py-4">Location</Table.Head>
						<Table.Head class="py-4">Progress</Table.Head>
						<Table.Head class="py-4">Description</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each emergencies as e, i}
						<Table.Row
							class="cursor-pointer"
							on:click={() => {
								selectedCrisis = emergencies[i];
								console.log('selectedCrisis', $state.snapshot(selectedCrisis));
							}}
						>
							<Table.Cell>
								<img src={e.priority} alt="priority" class="m-0 size-6 min-w-6 object-contain" />
							</Table.Cell>
							<Table.Cell>
								<div class="flex flex-col gap-2">
									<div class="flex items-center gap-2">
										<span>
											<Badge crisis={e.crisis} />
										</span>
									</div>
								</div></Table.Cell
							>

							<Table.Cell class="font-medium">
								<span class="flex items-center gap-1">
									<UsersRound class="size-4" />
									{e.numPeople}
								</span>
							</Table.Cell>
							<Table.Cell class="font-medium">{e.location}</Table.Cell>
							<Table.Cell>
								<Progress value={e.progress} />
							</Table.Cell>
							<Table.Cell><div class="line-clamp-2">{e.description}</div></Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={40}>
			<Container emergency={selectedCrisis} />
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
