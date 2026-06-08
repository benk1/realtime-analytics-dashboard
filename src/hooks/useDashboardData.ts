import { useEffect, useMemo, useState } from 'react';
import {
	dashboardData,
	productOptions,
	regionOptions,
} from '../data/dashboardData';
import type { DashboardFilters, DashboardItem } from '../types/dashboard';

const initialFilters: DashboardFilters = {
	region: 'All',
	product: 'All',
};

function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOption(options: string[]) {
	const realOptions = options.filter((option) => option !== 'All');
	const randomIndex = getRandomNumber(0, realOptions.length - 1);

	return realOptions[randomIndex];
}

function createLiveDashboardItem(previousData: DashboardItem[]): DashboardItem {
	const lastItem = previousData[previousData.length - 1];

	const nextId = lastItem ? lastItem.id + 1 : 1;
	const nextHour = 9 + nextId;

	return {
		id: nextId,
		time: `${String(nextHour).padStart(2, '0')}:00`,
		visitors: getRandomNumber(250, 900),
		sales: getRandomNumber(20, 120),
		revenue: getRandomNumber(2000, 14000),
		region: getRandomOption(regionOptions),
		product: getRandomOption(productOptions),
	};
}

export function useDashboardData() {
	const [data, setData] = useState<DashboardItem[]>(dashboardData);
	const [filters, setFilters] = useState<DashboardFilters>(initialFilters);
	const [isLive, setIsLive] = useState(true);

	useEffect(() => {
		if (!isLive) return;

		const intervalId = window.setInterval(() => {
			setData((currentData) => {
				const newItem = createLiveDashboardItem(currentData);

				return [...currentData.slice(-9), newItem];
			});
		}, 3000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [isLive]);

	const filteredData = useMemo(() => {
		return data.filter((item) => {
			const matchesRegion =
				filters.region === 'All' || item.region === filters.region;

			const matchesProduct =
				filters.product === 'All' || item.product === filters.product;

			return matchesRegion && matchesProduct;
		});
	}, [data, filters]);

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

	function toggleLiveUpdates() {
		setIsLive((currentValue) => !currentValue);
	}

	return {
		filters,
		filteredData,
		totals,
		conversionRate,
		isLive,
		toggleLiveUpdates,
		handleFilterChange,
		regionOptions,
		productOptions,
	};
}
