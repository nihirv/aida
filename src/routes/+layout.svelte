<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="prose w-screen p-8">
	{@render children()}
</div>
