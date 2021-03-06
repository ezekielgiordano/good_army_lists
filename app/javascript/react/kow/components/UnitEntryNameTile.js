import React from 'react'

const UnitEntryNameTile = props => {
	let allSelectedUnitOptions = props.selectedUnitOptions.sort((a, b) => {
		return (a.points - b.points)
	})
	let nonSpells = []
	let spells = []
	let i
	for (i = 0; i < allSelectedUnitOptions.length; i++) {
		if (allSelectedUnitOptions[i].index === props.unitObject.index) {
			if (allSelectedUnitOptions[i].unitOption.is_spell === true) {
				spells.push(allSelectedUnitOptions[i])
			} else {
				nonSpells.push(allSelectedUnitOptions[i])
			}
		}
	}
	let nonSpellText
	let spellText
	if (nonSpells.length > 0) {
		nonSpellText = nonSpells.map((unitOptionObject, index) => {
			return (
				<span key={index + 15000} >
					<span						
						className="unit-option-entry-label"
						onClick={() => props.removeUnitOption(unitOptionObject, props.alliedArmy)}
					>
						{' -- '}{unitOptionObject.unitOption.display_name}
					</span><br />
				</span>

			)
		})
	}
	if (spells.length > 0) {
		spellText = spells.map((unitOptionObject, index) => {
			return (
				<span key={index + 30000} >
					<span						
						className="unit-option-entry-label"
						onClick={() => props.removeUnitOption(unitOptionObject, props.alliedArmy)}
					>
						{' -- '}{unitOptionObject.unitOption.display_name}
					</span><br />
				</span>

			)
		})
	}

	let artefactText
	if (props.selectedArtefacts) {
		let allSelectedArtefacts = props.selectedArtefacts
		let selectedArtefactArray = []
		for (i = 0; i < allSelectedArtefacts.length; i++) {
			if (allSelectedArtefacts[i].index === props.unitObject.index) {
				selectedArtefactArray.push(allSelectedArtefacts[i])
			}
		}
		if (selectedArtefactArray.length > 0) {
			artefactText =
				<span>
					<span
						onClick={() => props.removeArtefact(selectedArtefactArray[0], props.alliedArmy)}
						className="unit-option-entry-label"
					>
						{' -- '}{selectedArtefactArray[selectedArtefactArray.length - 1].artefact.display_name}
					</span><br />
				</span>
		}
	}

	return (
		<span className="list-entry">
			<span 
				onClick={() => props.removeFromList(
					props.unitObject,
					props.alliedArmy			
				)}
				className="list-entry-label"
			>
				{props.unitObject.unit.display_name}
			</span><br />
				{artefactText}
				{nonSpellText}
				{spellText}
		</span>
	)
}

export default UnitEntryNameTile