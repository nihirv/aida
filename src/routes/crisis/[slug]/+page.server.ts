import { emergencies } from '$lib/fake-db/db';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	console.log('params', params);
	const emergency = emergencies.find((e) => e.id === params.slug);
	console.log('emergency', emergency);

	if (!emergency) error(404);

	return {
		emergency
	};
}
