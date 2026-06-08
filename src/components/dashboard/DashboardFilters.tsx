import type { DashboardFilters as DashboardFiltersType } from '../../types/dashboard';
import Select from '../ui/Select';

type DashboardFiltersProps = {
	filters: DashboardFiltersType;
	regionOptions: string[];
	productOptions: string[];
	onFilterChange: (name: keyof DashboardFiltersType, value: string) => void;
	onResetFilters: () => void;
};
function DashboardFilters({
	filters,
	regionOptions,
	productOptions,
	onFilterChange,
	onResetFilters,
}: DashboardFiltersProps) {
	return (
		<section className="dashboard-section" aria-labelledby="filters-heading">
			<div className="section-header section-header--with-action">
				<div>
					<h2 id="filters-heading">Filters</h2>

					<p>Choose a region or product to update the dashboard results.</p>
				</div>

				<button
					type="button"
					className="secondary-button"
					onClick={onResetFilters}
				>
					Reset filters
				</button>
			</div>

			<div className="filters-grid">
				<Select
					id="region-filter"
					label="Filter by region"
					value={filters.region || ''}
					options={regionOptions}
					onChange={(value) => onFilterChange('region', value)}
				/>

				<Select
					id="product-filter"
					label="Filter by product"
					value={filters.product || ''}
					options={productOptions}
					onChange={(value) => onFilterChange('product', value)}
				/>
			</div>
		</section>
	);
}

export default DashboardFilters;
