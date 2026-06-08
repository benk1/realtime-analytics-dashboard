import ProductSalesChart from '../components/dashboard/charts/ProductSalesChart';
import RevenueChart from '../components/dashboard/charts/RevenueChart';
import VisitorsChart from '../components/dashboard/charts/VisitorsChart';
import DashboardFilters from '../components/dashboard/DashboardFilters';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardTable from '../components/dashboard/DashboardTable';
import LiveUpdateControl from '../components/dashboard/LiveUpdatesControl';
import StatCard from '../components/dashboard/StatCard';
import EmptyState from '../components/ui/EmptyState';
import { useDashboardData } from '../hooks/useDashboardData';
import {
	formatCurrency,
	formatNumber,
	formatPercentage,
} from '../utils/formatter';

function DashboardPage() {
	const {
		filters,
		filteredData,
		totals,
		conversionRate,
		isLive,
		toggleLiveUpdates,
		handleFilterChange,
		resetFilters,
		regionOptions,
		productOptions,
	} = useDashboardData();

	const hasData = filteredData.length > 0;

	return (
		<main className="dashboard-page">
			<DashboardHeader />

			<LiveUpdateControl isLive={isLive} onToggle={toggleLiveUpdates} />

			<DashboardFilters
				filters={filters}
				regionOptions={regionOptions}
				productOptions={productOptions}
				onFilterChange={handleFilterChange}
				onResetFilters={resetFilters}
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

			{hasData ? (
				<>
					<div className="charts-grid">
						<VisitorsChart data={filteredData} />
						<RevenueChart data={filteredData} />
					</div>

					<ProductSalesChart data={filteredData} />

					<DashboardTable data={filteredData} />
				</>
			) : (
				<section className="dashboard-section" aria-labelledby="empty-heading">
					<EmptyState
						titleId="empty-heading"
						title="No data found"
						message="There are no dashboard records matching the selected filters. Try changing your filters or reset them."
						actionLabel="Reset filters"
						onAction={resetFilters}
					/>
				</section>
			)}
		</main>
	);
}

export default DashboardPage;
