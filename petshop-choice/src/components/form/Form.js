import './style.css';
import Button from "./button/Button";
import Inputs from "./input/Inputs";

export default function Form() {
    return (
        <div className="form">
                
            <Inputs 
                label = 'Pequeno porte (até 10kg)'
                type = 'number'
                name = 'small'
                placeholder = '0'
            />

            <Inputs 
                label = 'Grande porte (acima de 10kg)'
                type = 'number'
                name = 'big'
                placeholder = '0'
            />

            <Inputs 
                label = 'Data do banho'
                type = 'date'
                name = 'data'
            />

            <Button 
            name = 'btt-submit'
            type = 'submit'
            text = 'Enviar'
            />

        </div>
    )
}