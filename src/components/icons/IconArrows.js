import React from 'react';

const IconArrows = ({ className }) => (
	<svg
		className={className}
		width="8px"
		height="16px"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				className="citi-table-sortable__icon"
				fill="#BFBFBF"
				fillRule="nonzero"
			>
				<polygon
					className="arrow-desc"
					transform="translate(4.000000, 13.000000) scale(1, -1) translate(-4.000000, -13.000000) "
					points="8 16 4 10 -2.27373675e-13 16"
				></polygon>
				<polygon
					className="arrow-asc"
					points="8 6 4 -1.59872116e-14 -2.27373675e-13 6"
				></polygon>
			</g>
		</g>
	</svg>
);

export default IconArrows;
