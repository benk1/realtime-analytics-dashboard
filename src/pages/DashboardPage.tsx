import { useMemo, useState } from 'react';
import DashboardFilters from '../components/dashboard/DashboardFilters';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardTable from '../components/dashboard/DashboardTable';
import StatCard from '../components/dashboard/StatCard';
import { dashboardData } from '../data/dashboardData';
import type { DashboardFilters as DashboardFiltersType } from '../types/dashboard';
import {
	formatCurrency,
	formatNumber,
	formatPercentage,
} from '../utils/formatter';

const regionOptions = ['All', 'Europe', 'Africa', 'Asia', 'America'];
const productOptions = ['All', 'Website', 'Mobile App', 'API', 'Dashboard'];

function DashboardPage() {
	const [filters, setFilters] = useState<DashboardFiltersType>({
		region: 'All',
		product: 'All',
	});

	const filteredData = useMemo(() => {
		return dashboardData.filter((item) => {
			const matchesRegion =
				filters.region === 'All' || item.region === filters.region;

			const matchesProduct =
				filters.product === 'All' || item.product === filters.product;

			return matchesRegion && matchesProduct;
		});
	}, [filters]);

	const totals = filteredData.reduce(
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

	const conversionRate =
		totals.visitors > 0 ? (totals.sales / totals.visitors) * 100 : 0;

	function handleFilterChange(name: keyof DashboardFiltersType, value: string) {
		setFilters((currentFilters) => ({
			...currentFilters,
			[name]: value,
		}));
	}

	return (
		<main className="dashboard-page">
			<DashboardHeader />

			<DashboardFilters
				filters={filters}
				regionOptions={regionOptions}
				productOptions={productOptions}
				onFilterChange={handleFilterChange}
			/>

			<section className="dashboard-section" aria-labelledby="overview-heading">
				<div className="section-header">
					<h2 id="overview-heading">Overview</h2>

					<p>A quick summary of the most important analytics numbers.</p>
				</div>

				<div className="stats-grid">
					<StatCard
						title="Visitors"
						value={formatNumber(totals.visitors)}
						description="People who visited the platform today."
					/>

					<StatCard
						title="Sales"
						value={formatNumber(totals.sales)}
						description="Completed purchases from all channels."
					/>

					<StatCard
						title="Revenue"
						value={formatCurrency(totals.revenue)}
						description="Total money generated from sales."
					/>

					<StatCard
						title="Conversion Rate"
						value={formatPercentage(conversionRate)}
						description="Percentage of visitors who became customers."
					/>
				</div>
			</section>

			<DashboardTable data={filteredData} />
		</main>
	);
}

export default DashboardPage;
