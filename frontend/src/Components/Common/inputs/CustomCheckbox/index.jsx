

function CustomCheckbox({ value, id, onChange }) {
    return (
        <input type="checkbox" id={id} checked={value} onChange={() => onChange(!value)} />
    )
}

export default CustomCheckbox
