import './style.css'; 

export default function Inputs({label, type, name, placeholder, value}) {
    return (
        <div>
            <label htmlFor="{name}" className="label">{label}:</label>
            <input 
                className="input"
                type = {type}
                name = {name}
                placeholder = {placeholder}
                value = {value}
           />
        </div>
    )
}