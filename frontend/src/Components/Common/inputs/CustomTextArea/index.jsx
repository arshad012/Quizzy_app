
const CustomTextArea = ({ id, value, onChange, className = '', placeholder }) => {
    return (
        <textarea 
            id={id} 
            value={value}
            onChange={e => onChange(e.target.value)}
            className={`${className} border p-2 rounded-md w-full`} 
            placeholder={placeholder} 
            rows={3}>
        </textarea>
    )
}

export default CustomTextArea
