import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import type { DashboardItem } from '../../../types/dashboard';

type RevenueChartProps = {
	data: DashboardItem[];
};

function RevenueChart({ data }: RevenueChartProps) {
	return (
		<section
			className="dashboard-section"
			aria-labelledby="revenue-chart-heading"
		>
			<div className="section-header">
				<h2 id="revenue-chart-heading">Revenue Over Time</h2>

				<p>A bar chart showing revenue changes across the current records.</p>
			</div>

			<div
				className="chart-container"
				role="img"
				aria-label="Bar chart showing revenue over time based on the selected filters."
			>
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="revenue" fill="#16a34a" radius={[8, 8, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default RevenueChart;
