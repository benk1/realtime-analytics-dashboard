type StatCardProps = {
	title: string;
	value: string;
	description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
	return (
		<article className="stat-card">
			<p className="stat-card__title">{title}</p>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__description">{description}</p>
		</article>
	);
}

export default StatCard;
