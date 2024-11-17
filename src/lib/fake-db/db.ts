export type Emergency = {
	id: string;
	name: string;
	priority: string;
	numPeople: number;
	aidResources: string[];
	description: string;
	latestImages: { imageUrl: string; date: string; width: number; height: number; extra?: string }[];
	userImages: { imageUrl: string; date: string; width: number; height: number }[];
	location: string;
	crisis: string;
	agency: string;
	userComments: { name: string; comment: string; date: string; location: string }[];
};

export const emergencies: Emergency[] = [
	{
		id: 'flood-in-spain',
		crisis: 'Flood',
		location: 'Valencia',
		name: 'Flood in Valencia',
		priority: '/p2.png',
		numPeople: 9001,
		aidResources: ['shelter', 'electricity', 'food', 'medical'],
		agency: 'Police',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		latestImages: [
			{
				imageUrl: '/flood.webp',
				date: '16/11/24',
				width: 1200,
				height: 900,
				extra: 'Flooding Started'
			},
			{
				imageUrl: '/no-flood.webp',
				date: '15/11/24',
				width: 1200,
				height: 900,
				extra: 'Baseline View'
			}
		],
		userImages: [
			{ imageUrl: '/spain-flood/spain_flood1.png', date: '16/11/24', width: 860, height: 516 },
			{ imageUrl: '/spain-flood/spain_flood2.jpg', date: '16/11/24', width: 376, height: 212 },
			{ imageUrl: '/spain-flood/spain_flood3.png', date: '16/11/24', width: 518, height: 518 }
		],
		userComments: [
			{
				name: 'Simone',
				location: 'Valencia',
				comment:
					'Our home is completely cut off. We need immediate evacuation assistance, especially for my elderly parents who can’t walk long distances. Please send boats or rescue teams!',
				date: '17/11/24 11:23am'
			},
			{
				name: 'Earl',
				location: 'Valencia',
				comment:
					'The bridge near us has collapsed, and we’re stranded. We need food, clean water, and blankets for the kids. Can someone help us get supplies?',
				date: '17/11/24 10:39am'
			},
			{
				name: 'Xaiver',
				location: 'Valencia',
				comment:
					'I’m alone, and the power is out. I don’t have enough medication or food to last much longer. Please, can someone come and check on us here?',
				date: '17/11/24 10:01am'
			},
			{
				name: 'Yvonne',
				location: 'Valencia',
				comment:
					'We’ve gathered a few survivors in a nearby shelter, but we don’t have enough supplies. Can someone send clean drinking water and basic medical kits here urgently?',
				date: '17/11/24 9:48am'
			}
		]
	},
	{
		id: 'conflict-in-x',
		crisis: 'Conflict',
		location: 'X',
		name: 'Conflict in X',
		priority: '/p3.png',
		numPeople: 103,
		aidResources: ['shelter', 'water', 'food'],
		agency: 'Red Cross',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		latestImages: [
			{
				imageUrl: '/flood.webp',
				date: '16/11/24',
				width: 1200,
				height: 900,
				extra: 'Flooding Started'
			},
			{ imageUrl: '/no-flood.webp', date: '15/11/24', width: 1200, height: 900, extra: 'Baseline' }
		],
		userImages: [
			{ imageUrl: '/flood.webp', date: '16/11/24', width: 1200, height: 900 },
			{ imageUrl: '/no-flood.webp', date: '15/11/24', width: 1200, height: 900 }
		],
		userComments: [
			{
				name: 'Simone',
				location: 'Valencia',
				comment:
					'Our home is completely cut off. We need immediate evacuation assistance, especially for my elderly parents who can’t walk long distances. Please send boats or rescue teams!',
				date: '17/11/24 11:23am'
			},
			{
				name: 'Earl',
				location: 'Valencia',
				comment:
					'The bridge near us has collapsed, and we’re stranded. We need food, clean water, and blankets for the kids. Can someone help us get supplies?',
				date: '17/11/24 10:39am'
			},
			{
				name: 'Xaiver',
				location: 'Valencia',
				comment:
					'I’m alone, and the power is out. I don’t have enough medication or food to last much longer. Please, can someone come and check on us here?',
				date: '17/11/24 10:01am'
			},
			{
				name: 'Yvonne',
				location: 'Valencia',
				comment:
					'We’ve gathered a few survivors in a nearby shelter, but we don’t have enough supplies. Can someone send clean drinking water and basic medical kits here urgently?',
				date: '17/11/24 9:48am'
			}
		]
	}
];
