
function CustomNumberInput({ id = '', value = '', onChange, className = '', placeholder = '', ...props }) {
    return (
        <input
            id={id}
            type="number"
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            className={`${className} border p-2 rounded-md w-full`}
            {...props}
        />
    )
}

export default CustomNumberInput
