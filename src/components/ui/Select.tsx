type SelectProps = {
	id: string;
	value: string;
	options: string[];
	label: string;
	onChange: (value: string) => void;
};
function Select({ id, value, options, label, onChange }: SelectProps) {
	return (
		<div className="form-control">
			<label htmlFor={id}>{label}</label>
			<select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
