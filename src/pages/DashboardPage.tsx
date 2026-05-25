import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';

function DashboardPage() {
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
						value="12,400"
						description="People who visited the platform today."
					/>
					<StatCard
						title="Sales"
						value="860"
						description="Completed purchases from all channels."
					/>
					<StatCard
						title="Revenue"
						value="24,300"
						description="Total money generated from sales."
					/>
					<StatCard
						title="Conversion Rate"
						value="6.9%"
						description="Percentage of visitors who became customers."
					/>
				</div>
			</section>
		</main>
	);
}

export default DashboardPage;
