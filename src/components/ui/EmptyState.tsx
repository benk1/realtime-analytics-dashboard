type EmptyStateProps = {
	title: string;
	message: string;
	titleId?: string;
	actionLabel?: string;
	onAction?: () => void;
};

function EmptyState({
	title,
	message,
	titleId,
	actionLabel,
	onAction,
}: EmptyStateProps) {
	return (
		<div className="empty-state" role="status">
			<h3 id={titleId}>{title}</h3>

			<p>{message}</p>

			{actionLabel && onAction ? (
				<button type="button" className="secondary-button" onClick={onAction}>
					{actionLabel}
				</button>
			) : null}
		</div>
	);
}

export default EmptyState;
