import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { DashboardItem } from '../../../types/dashboard';

type ProductSalesChartProps = {
	data: DashboardItem[];
};

type ProductSalesItem = {
	name: string;
	value: number;
};

const pieColors = ['#2563eb', '#16a34a', '#f97316', '#9333ea'];

function getProductSalesData(data: DashboardItem[]): ProductSalesItem[] {
	const salesByProduct = data.reduce<Record<string, number>>(
		(accumulator, item) => {
			accumulator[item.product] = (accumulator[item.product] || 0) + item.sales;

			return accumulator;
		},
		{},
	);

	return Object.entries(salesByProduct).map(([name, value]) => ({
		name,
		value,
	}));
}

function ProductSalesChart({ data }: ProductSalesChartProps) {
	const productSalesData = getProductSalesData(data);

	return (
		<section
			className="dashboard-section"
			aria-labelledby="product-chart-heading"
		>
			<div className="section-header">
				<h2 id="product-chart-heading">Sales by Product</h2>

				<p>
					A product breakdown showing which products generated the most sales.
				</p>
			</div>

			<div
				className="chart-container"
				role="img"
				aria-label="Pie chart showing sales grouped by product based on the selected filters."
			>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={productSalesData}
							dataKey="value"
							nameKey="name"
							outerRadius={100}
							label
						>
							{productSalesData.map((item, index) => (
								<Cell
									key={item.name}
									fill={pieColors[index % pieColors.length]}
								/>
							))}
						</Pie>

						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default ProductSalesChart;
