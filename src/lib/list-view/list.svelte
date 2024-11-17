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

	let selectedCrisis = $state(emergencies[0]);
</script>

<div class="space-y-8">
	<Dialog.Root>
		<Dialog.Trigger
			>{`Ask a question about the ${selectedCrisis.crisis} in ${selectedCrisis.location}`}</Dialog.Trigger
		>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
				<Dialog.Description>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</Dialog.Description>
			</Dialog.Header>
		</Dialog.Content>
	</Dialog.Root>

	<Resizable.PaneGroup direction="horizontal" class="min-h-[200px] rounded-lg border">
		<Resizable.Pane defaultSize={60}>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Crisis</Table.Head>
						<Table.Head>Location</Table.Head>
						<Table.Head>Aid Resources Required</Table.Head>
						<Table.Head>Description</Table.Head>
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
								<div class="flex flex-col gap-2">
									<div class="flex items-center gap-2">
										<span
											><img
												src={e.priority}
												alt="priority"
												class="m-0 size-6 min-w-6 object-contain"
											/></span
										>
										<span>
											<Badge crisis={e.crisis} />
										</span>
									</div>
									<span class="flex items-center gap-1">
										<UsersRound class="size-4" />
										{e.numPeople}
									</span>
								</div></Table.Cell
							>
							<Table.Cell class="font-medium">{e.location}</Table.Cell>
							<Table.Cell>
								<div class="flex gap-2">
									{#each e.aidResources as aid}
										<AidBadge {aid} />
									{/each}
								</div>
							</Table.Cell>
							<Table.Cell>{e.description}</Table.Cell>
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
