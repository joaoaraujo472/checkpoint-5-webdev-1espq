'use client'

const FilterInput =({value , onChange}) => {
    return(
        <input 
        type = "text"
        placeholder="Filter por nome ou email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default FilterInput