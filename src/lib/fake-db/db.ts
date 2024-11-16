type Emergency = {
	id: string;
	name: string;
	priority: number;
	numPeople: number;
	aidResources: string[];
	description: string;
	latestImages: string[];
};

export const emergencies: Emergency[] = [
	{
		id: 'flood-in-spain',
		name: 'Flood in Spain',
		priority: 1,
		numPeople: 9001,
		aidResources: ['shelter', 'generators', 'food'],
		description: 'Lipsum',
		latestImages: ['/flood.webp']
	},
	{
		id: 'conflict-in-x',
		name: 'Conflict in X',
		priority: 1,
		numPeople: 103,
		aidResources: ['shelter', 'water', 'food'],
		description: 'Lipsum',
		latestImages: ['/flood.webp']
	}
];
