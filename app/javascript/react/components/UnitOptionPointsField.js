import React from 'react'

const UnitOptionPointsField = props => {
	return (
	    <label>
	    	{props.label}
	      	<input
	        	name={props.name}
	        	type='text'
	        	value={props.content}
	        	onChange={props.handlerFunction}
	      	/>
	    </label>
	)
}
	
export default UnitOptionPointsField