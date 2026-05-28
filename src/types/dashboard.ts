export type DashboardItem = {
	id: number;
	time: string;
	visitors: number;
	sales: number;
	revenue: number;
	region: string;
	product: string;
};

export type DashboardFilters = {
	region?: string;
	product?: string;
};
