import './style.css';

export default function Button({name, type, text}) {
    return (
        <div className="button-area">
            <button 
                name = {name}
                type = {type}
            >{text}</button>
        </div>
    )
}