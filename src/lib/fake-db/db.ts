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
	progress: number;
};

export const emergencies: Emergency[] = [
	{
		id: 'flood-in-spain',
		crisis: 'Flood',
		location: 'Valencia',
		name: 'Flood in Valencia',
		priority: '/p3.png',
		numPeople: 13952,
		progress: 65,
		aidResources: ['electricity', 'food', 'medical', 'water', 'blankets'],
		agency: 'Police',
		description:
			'Aid workers should prioritize delivering essential supplies, including medication, food, clean water, and blankets, to stranded residents in the west part of the city, where the floodwaters have subsided and the wind has slowed down, while also providing immediate medical attention to those in need, such as the injured husband in the second commentary.',
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
		id: 'flood-in-spain',
		crisis: 'Conflict',
		location: 'Ukraine',
		name: 'Conflict in Ukraine',
		priority: '/p3.png',
		numPeople: 524368,
		progress: 13,
		aidResources: ['shelter', 'electricity', 'food', 'medical'],
		agency: 'Police',
		description:
			'Aid workers should prioritize providing emergency medical assistance to the injured, delivering food, water, and medicines to densely populated shelters, and clearing unexploded ordnance from the streets to ensure safe evacuation routes, particularly in the urban area where a large explosion has caused significant damage.',
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
		id: 'flood-in-spain',
		crisis: 'Wildfire',
		location: 'California',
		name: 'Wildfire in California',
		priority: '/p2.png',
		numPeople: 4835,
		aidResources: ['shelter', 'electricity', 'food', 'medical'],
		progress: 47,
		agency: 'Police',
		description:
			'Evacuation centers are needed in the affected neighborhoods, with priority on providing information on safe evacuation routes, distributing masks and air purifiers, and conducting rescue operations to check on areas left behind, particularly for those who evacuated with pets or elderly neighbors.',
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
		id: 'flood-in-spain',
		crisis: 'Earthquake',
		location: 'Turkey',
		name: 'Earthquake in Turkey',
		progress: 82,
		priority: '/p1.png',
		numPeople: 24123,
		aidResources: ['shelter', 'electricity', 'food', 'medical'],
		agency: 'Police',
		description:
			'Rescue teams should prioritize immediate assistance to areas with trapped survivors, such as the location of the collapsed building, and provide medical aid to injured individuals, particularly those in the vicinity of the destroyed buildings in the city center.',
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
	}
];
