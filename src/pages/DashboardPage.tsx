import DashboardHeader from '../components/dashboard/DashboardHeader';

function DashboardPage() {
	return (
		<main className="dashboard-page">
			<DashboardHeader />

			<section className="dashboard-section" aria-labelledby="overview-heading">
				<h2 id="overview-heading">Overview</h2>

				<p>
					Dashboard content will appear here. We will add cards, filters,
					charts, and a table step by step.
				</p>
			</section>
		</main>
	);
}

export default DashboardPage;
