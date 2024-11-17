<script lang="ts">
	import type { Emergency } from '$lib/fake-db/db';
	import { MessageSquare, LayoutDashboard, Users, Briefcase } from 'lucide-svelte';
	import Crisis from './crisis.svelte';
	import { cn } from '$lib/utils';
	import Chat from './chat.svelte';

	export let emergency: Emergency;
	export let activeTab = 'crisis';
</script>

<div class="flex justify-end gap-2 p-4">
	<button
		class={cn(
			'cursor-pointer rounded p-1 hover:bg-[#2fc0f2]',
			activeTab === 'crisis' && 'bg-[#2fc0f2]'
		)}
		on:click={() => {
			activeTab = 'crisis';
		}}
	>
		<LayoutDashboard class={cn('hover:stroke-white', activeTab === 'crisis' && 'stroke-white')} />
	</button>
	<button
		class={cn(
			'cursor-pointer rounded p-1 hover:bg-[#2fc0f2]',
			activeTab === 'chat' && 'bg-[#2fc0f2]'
		)}
		on:click={() => {
			activeTab = 'chat';
		}}
	>
		<MessageSquare class={cn('hover:stroke-white', activeTab === 'chat' && 'stroke-white')} />
	</button>
</div>

{#if activeTab === 'crisis'}
	<Crisis {emergency} />
{/if}

{#if activeTab === 'chat'}
	<Chat />
{/if}
