<script>
	let { data } = $props();
</script>

<div>
	<h2>{data.emergency.name}</h2>
	<div class="space-x-10">
		<span>Priority: {data.emergency.priority}</span><span
			># Affected: {data.emergency.numPeople}</span
		>
	</div>
	<div>{data.emergency.aidResources.join(', ')}</div>
	<div>{data.emergency.description}</div>
	<h3>Satellite Images</h3>
	<h3>User Uploaded Images</h3>
	<h3>User Requests for Aid</h3>
	<h3>What are users saying?</h3>
</div>
