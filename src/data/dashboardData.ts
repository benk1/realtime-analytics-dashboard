import type { DashboardItem } from '../types/dashboard';

export const regionOptions = ['All', 'Europe', 'Africa', 'Asia', 'America'];

export const productOptions = [
	'All',
	'Website',
	'Mobile App',
	'API',
	'Dashboard',
];

export const dashboardData: DashboardItem[] = [
	{
		id: 1,
		time: '09:00',
		visitors: 320,
		sales: 24,
		revenue: 2400,
		region: 'Europe',
		product: 'Website',
	},
	{
		id: 2,
		time: '10:00',
		visitors: 460,
		sales: 38,
		revenue: 3900,
		region: 'Africa',
		product: 'Mobile App',
	},
	{
		id: 3,
		time: '11:00',
		visitors: 510,
		sales: 42,
		revenue: 5200,
		region: 'Asia',
		product: 'API',
	},
	{
		id: 4,
		time: '12:00',
		visitors: 620,
		sales: 55,
		revenue: 7200,
		region: 'Europe',
		product: 'Dashboard',
	},
	{
		id: 5,
		time: '13:00',
		visitors: 740,
		sales: 68,
		revenue: 8100,
		region: 'America',
		product: 'Website',
	},
];
