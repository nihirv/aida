<script>
	import { onMount } from 'svelte';
	import {
		Send,
		LayoutDashboard,
		MessageSquare,
		Users,
		Briefcase,
		MapPin,
		Clock
	} from 'lucide-svelte';

	let messages = [
		{
			type: 'system',
			content: "Welcome to AIDA! Queries trending - Let's go?"
		}
	];

	const suggestedPrompts = [
		'What is the current status of flooded areas?',
		'Show me active evacuation zones',
		'Latest satellite imagery of affected regions',
		'Emergency resource deployment status'
	];

	const handlePromptClick = (prompt) => {
		// Add user message
		messages = [
			...messages,
			{
				type: 'user',
				content: prompt
			}
		];

		// Add assistant response
		if (prompt === 'What is the current status of flooded areas?') {
			messages = [
				...messages,
				{
					type: 'assistant',
					content: "Here's the current status of flooded areas in Valencia:",
					metadata: {
						title: 'Valencia Flood Status',
						subtitle: 'Critical flooding in coastal regions',
						location: 'Coastal District',
						severity: 'High Alert',
						time: 'Updated 5 min ago'
					}
				}
			];
		}
	};
</script>

<div class="not-prose flex min-h-screen flex-col bg-white">
	<main class="container mx-auto max-w-3xl flex-1 px-4 py-12">
		<div class="space-y-6">
			{#each messages as message, index}
				{#if message.type === 'system'}
					<div class="flex items-start gap-6">
						<div
							class="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-cyan-50"
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIDA%20(2)-uYirdDT7cESUXgjoTQ6LcWcmQ9wSlZ.png"
								alt="AIDA Assistant"
								class="h-24 w-24 scale-110"
							/>
						</div>
						<div
							class="flex-1 rounded-3xl bg-gradient-to-r from-gray-50 to-white p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]"
						>
							<p class="text-2xl font-light tracking-wide text-gray-800">
								{message.content}
							</p>
						</div>
					</div>
				{/if}

				{#if message.type === 'user'}
					<div class="flex justify-end gap-4">
						<div class="max-w-[80%] rounded-2xl bg-[#2fc0f2] px-6 py-3 text-white">
							<p class="m-0 text-lg">{message.content}</p>
						</div>
						<img
							class="m-0 h-12 w-12 rounded-full object-cover"
							src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yRiZ0kxjpkLmiUEZJBUo6pDBnqZ1OR.png"
							alt="User"
						/>
					</div>
				{/if}

				{#if message.type === 'assistant' && message.metadata}
					<div class="space-y-4">
						<div class="flex items-start gap-6">
							<div
								class="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-cyan-50"
							>
								<img
									src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIDA%20(2)-uYirdDT7cESUXgjoTQ6LcWcmQ9wSlZ.png"
									alt="AIDA Assistant"
									class="h-24 w-24 scale-110"
								/>
							</div>
							<div class="flex-1">
								<p class="mb-4 text-xl">{message.content}</p>
								<div class="bg-gray-50 p-6">
									<div class="space-y-4">
										<div>
											<h3 class="text-2xl font-semibold">
												{message.metadata.title}
											</h3>
											<p class="text-gray-600">{message.metadata.subtitle}</p>
										</div>
										<div class="flex items-center gap-6">
											<div class="flex items-center gap-2">
												<MapPin class="h-5 w-5 text-gray-500" />
												<span>{message.metadata.location}</span>
											</div>
											<div class="flex items-center gap-2">
												<Clock class="h-5 w-5 text-gray-500" />
												<span>{message.metadata.time}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<div class="mt-12 space-y-12">
			<div class="flex flex-wrap justify-center gap-2">
				{#each suggestedPrompts as prompt}
					<button
						class="rounded-full border-blue-100 bg-white px-4 py-2 font-light text-blue-600 shadow-sm hover:bg-blue-50"
						on:click={() => handlePromptClick(prompt)}
					>
						{prompt}
					</button>
				{/each}
			</div>

			<div class="relative">
				<input
					placeholder="Ask me anything..."
					class="w-full rounded-full border-gray-200 py-6 pl-6 pr-12 text-lg font-light shadow-sm"
				/>
				<button
					class="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600"
				>
					<Send class="size-4 stroke-white" />
				</button>
			</div>
		</div>
	</main>
</div>
