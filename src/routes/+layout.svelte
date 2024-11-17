<script lang="ts">
	import { UsersRound, Briefcase } from 'lucide-svelte';
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-muted border-b">
	<header class="px-8 py-4">
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<img src="/logo.png" class="w-[200px]" />
				</div>
				<p class="font-bold">Control Centre</p>
				<p>Crisis</p>
				<p>Agencies</p>
			</div>
			<div class="flex gap-2">
				<img
					class="m-0 size-12 rounded-full object-cover"
					src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yRiZ0kxjpkLmiUEZJBUo6pDBnqZ1OR.png"
					alt="User"
				/>
			</div>
		</div>
	</header>
</nav>
<div class="prose w-screen max-w-none p-8">
	{@render children()}
</div>
