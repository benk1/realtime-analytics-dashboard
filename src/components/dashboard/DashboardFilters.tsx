import type { DashboardFilters as DashboardFiltersType } from '../../types/dashboard';
import Select from '../ui/Select';

type DashboardFiltersProps = {
	filters: DashboardFiltersType;
	regionOptions: string[];
	productOptions: string[];
	onFilterChange: (name: keyof DashboardFiltersType, value: string) => void;
};
function DashboardFilters({
	filters,
	regionOptions,
	productOptions,
	onFilterChange,
}: DashboardFiltersProps) {
	return (
		<section className="dashboard-section" aria-labelledby="filters-heading">
			<div>
				<h2 id="filters-heading">Filters</h2>

				<p>Choose a region or product to update the dashboard results.</p>
			</div>

			<div className="filters-grid">
				<Select
					id="region-filter"
					label=" Filter by region"
					value={filters.region || ''}
					options={regionOptions}
					onChange={(value) => onFilterChange('region', value)}
				/>
				<Select
					id="product-filter"
					label=" Filter by product"
					options={productOptions}
					value={filters.product || ''}
					onChange={(value) => onFilterChange('product', value)}
				/>
			</div>
		</section>
	);
}

export default DashboardFilters;
