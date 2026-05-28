import { useMemo, useState } from 'react';
import { dashboardData } from '../data/dashboardData';
import type { DashboardFilters } from '../types/dashboard';

const initialFilters: DashboardFilters = {
	region: 'All',
	product: 'All',
};

export function useDashboardData() {
	const [filters, setFilters] = useState<DashboardFilters>(initialFilters);

	const filteredData = useMemo(() => {
		return dashboardData.filter((item) => {
			const matchesRegion =
				filters.region === 'All' || item.region === filters.region;

			const matchesProduct =
				filters.product === 'All' || item.product === filters.product;

			return matchesRegion && matchesProduct;
		});
	}, [filters]);

	const totals = useMemo(() => {
		return filteredData.reduce(
			(accumulator, item) => {
				accumulator.visitors += item.visitors;
				accumulator.sales += item.sales;
				accumulator.revenue += item.revenue;

				return accumulator;
			},
			{
				visitors: 0,
				sales: 0,
				revenue: 0,
			},
		);
	}, [filteredData]);

	const conversionRate = useMemo(() => {
		return totals.visitors > 0 ? (totals.sales / totals.visitors) * 100 : 0;
	}, [totals.sales, totals.visitors]);

	function handleFilterChange(name: keyof DashboardFilters, value: string) {
		setFilters((currentFilters) => ({
			...currentFilters,
			[name]: value,
		}));
	}

	return {
		filters,
		filteredData,
		totals,
		conversionRate,
		handleFilterChange,
	};
}
