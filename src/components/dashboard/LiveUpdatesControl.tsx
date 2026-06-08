type LiveUpdateControlProps = {
	isLive: boolean;
	onToggle: () => void;
};

function LiveUpdateControl({ isLive, onToggle }: LiveUpdateControlProps) {
	return (
		<div className="live-control">
			<button
				type="button"
				className={isLive ? 'live-button live-button--active' : 'live-button'}
				onClick={onToggle}
				aria-pressed={isLive}
			>
				{isLive ? 'Pause live updates' : 'Resume live updates'}
			</button>

			<p className="live-status" aria-live="polite">
				{isLive
					? 'Live updates are currently running.'
					: 'Live updates are currently paused.'}
			</p>
		</div>
	);
}

export default LiveUpdateControl;
