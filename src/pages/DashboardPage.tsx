import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';
import { dashboardData } from '../data/dashboardData';
import {
	formatCurrency,
	formatNumber,
	formatPercentage,
} from '../utils/formatter';

function DashboardPage() {
	const totals = dashboardData.reduce(
		(acc, item) => {
			acc.visitors += item.visitors;
			acc.sales += item.sales;
			acc.revenue += item.revenue;
			return acc;
		},
		{ visitors: 0, sales: 0, revenue: 0 },
	);

	const conversionRate =
		totals.visitors > 0 ? (totals.sales / totals.visitors) * 100 : 0;

	return (
		<main className="dashboard-page">
			<DashboardHeader />

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
		</main>
	);
}

export default DashboardPage;
