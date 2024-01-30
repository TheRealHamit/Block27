export default function FormInput({ value, valueSetter, type, inputLabel, placeholder, onClick }) {
    return (
        <>
        <label>
            {inputLabel}<input value={value} type={type} placeholder={placeholder} onChange={(e) => {valueSetter(e.target.value)}} onClick={onClick}></input>
        </label>
        </>
    )
}