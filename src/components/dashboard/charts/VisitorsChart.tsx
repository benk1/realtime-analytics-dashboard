import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import type { DashboardItem } from '../../../types/dashboard';

type VisitorsChartProps = {
	data: DashboardItem[];
};

function VisitorsChart({ data }: VisitorsChartProps) {
	return (
		<section
			className="dashboard-section"
			aria-labelledby="visitors-chart-heading"
		>
			<div className="section-header">
				<h2 id="visitors-chart-heading">Visitors Over Time</h2>

				<p>
					A visual summary of visitor activity from the current filtered data.
				</p>
			</div>

			<div
				className="chart-container"
				role="img"
				aria-label="Area chart showing visitors over time based on the selected filters."
			>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="visitors"
							stroke="#2563eb"
							fill="#dbeafe"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default VisitorsChart;
