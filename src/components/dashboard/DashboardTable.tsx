import type { DashboardItem } from '../../types/dashboard';
import { formatCurrency, formatNumber } from '../../utils/formatter';

type DashboardTableProps = {
	data: DashboardItem[];
};
function DashboardTable({ data }: DashboardTableProps) {
	return (
		<section className="dashboard-section" aria-labelledby="table-heading">
			<div className="section-header">
				<h2 id="table-heading">Latest Data</h2>
				<p> A detailed view of the current dashboard records.</p>
			</div>

			<div table-wrapper>
				<table className="dashboard-table">
					<caption>
						Latest analytics data showing time, region, product, visitors,
						sales, and revenue.
					</caption>
					<thead>
						<tr>
							<th scope="col">Time</th>
							<th scope="col">Region</th>
							<th scope="col">Product</th>
							<th scope="col">Visitors</th>
							<th scope="col">Sales</th>
							<th scope="col">Revenue</th>
						</tr>
					</thead>

					<tbody>
						{data.map((item) => (
							<tr key={item.id}>
								<td>{item.time}</td>
								<td>{item.region}</td>
								<td>{item.product}</td>
								<td>{formatNumber(item.visitors)}</td>
								<td>{formatNumber(item.sales)}</td>
								<td>{formatCurrency(item.revenue)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default DashboardTable;
