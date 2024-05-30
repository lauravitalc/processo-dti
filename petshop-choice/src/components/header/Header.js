import './style.css'; 

export default function Header({title, description}){
    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}