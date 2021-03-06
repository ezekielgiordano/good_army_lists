import React from 'react'
import whiteSquare from '../../../../assets/images/whiteSquare.png'

const ArtefactSelectionLabel = props => {
	let extraSpace
	if (props.artefact.points < 10) {
		extraSpace = <span className="hidden">{'_'}</span>
	}

	let display
	if (props.greyedOut === false) {
		display =
			<table className="artefact-table">
				<tbody>
					<tr>
						<td valign="top">
							{extraSpace}
							<span className="pastel-red">{props.artefact.points}</span>
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td>
							<span
								onClick={() => props.selectArtefact(props.unitObject, props.artefact)}
								className="artefact-selection-label"
							>
								{props.artefact.display_name}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
	} else {
		display =
			<table className="artefact-table">
			<tbody>
				<tr className="greyed-out-unit-option">
					<td valign="top">
						{extraSpace}{props.artefact.points}
					</td>
					<td>
						<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
					</td>
					<td>
						<span>
							{props.artefact.display_name}
						</span>
					</td>
				</tr>
			</tbody>
		</table>	
	}

	return (
		<div>{display}</div>
	)
}

export default ArtefactSelectionLabel