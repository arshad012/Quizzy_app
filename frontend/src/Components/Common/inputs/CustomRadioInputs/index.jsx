
function CustomRadioInputs({ id = '', value = '', onChange, className = '', ...props }) {
    return (
        <input 
            id={id}
            type="radio" 
            value={value}
            onChange={e => onChange(e.target.value)}
            className={`${className}`}
            {...props}
        />
    )
}

export default CustomRadioInputs
