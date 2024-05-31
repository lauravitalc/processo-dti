import './style.css';
import Button from "./button/Button";
import Inputs from "./input/Inputs";
import axios from 'axios';
import React, { useState } from 'react';

export default function Form() {
    const [smallDogs, setSmallValue] = useState('');
    const [bigDogs, setBigValue] = useState('');
    const [dateBath, setDateValue] = useState('');
    const [obj, setObj] = useState({
        name_petshop: "",
        price_petshop: ""
    });
  
    function sendValueToFlask(data) {
        const apiUrl = 'http://localhost:5000/api/petshop';
        axios.post(apiUrl, {data})
          .then(response => {
            setObj(response.data);
          })
          .catch(error => {
            console.error('Falha ao enviar o valor:', error);
          });
      }

      const validateDate = (dateString) => {
        const dateFormat = new Date(dateString);
        dateFormat.setDate(dateFormat.getDate() + 1);
        const currentDate = Date.now();
        const today = new Date(currentDate);

        if(dateFormat >= today) {
            return true;
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const isValidDate = validateDate(dateBath);
        if (!isValidDate) {
            alert('Data do banho inválida. Selecione uma data futura ou a data de hoje.');
            return; 
        }

        const data = {
            smallDogs: smallDogs,
            bigDogs: bigDogs,
            dateBath: dateBath
        };
        sendValueToFlask(data);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>                
                <Inputs 
                    label = 'Pequeno porte (até 10kg)'
                    type = 'number'
                    name = 'small'
                    placeholder = '0'
                    value = {smallDogs}
                    onChange={(e) => setSmallValue(e.target.value)}
                />
                <Inputs 
                    label = 'Grande porte (acima de 10kg)'
                    type = 'number'
                    name = 'big'
                    placeholder = '0'
                    value = {bigDogs}
                    onChange={(e) => setBigValue(e.target.value)}
                />
                <Inputs 
                    label = 'Data do banho'
                    type = 'date'
                    name = 'date'
                    value = {dateBath}
                    onChange={(e) => setDateValue(e.target.value)}
                />
                <Button 
                    name = 'btt-submit'
                    type = 'submit'
                    text = 'Enviar'
                />
            </form>
            <div>
                {obj.name_petshop && (
                    <div className='result'>
                        <h2>A melhor opção para você é:</h2>
                        <p>Pet Shop: {obj.name_petshop}</p>
                        <p>Preço total: {obj.price_petshop}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

