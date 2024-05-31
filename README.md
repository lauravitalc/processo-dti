
# Petshop Choice

Projeto para o processo de seleção da Dti Digital. Se trata de uma solução para calcular qual petshop é mais vantajoso para o Sr. Eduardo levar os seus cachorros para tomar banho, considerando o porte de cada um, dia da semana e distância como critério de desempate.

## Índice
1. Instalação
2. Ferramentas
3. Premissas e Decisões
## Instalação

### Back-End: Python & Flask
Primeiramente certifique-se que possui [Node.js](https://nodejs.org/en) instalado em sua máquina. Utilizaremos o npm, o gerenciador de pacotes do Node.

Segundamente, tenha a última versão do [Python](https://www.python.org/downloads/) instalado em sua máquina.

Após a instalação do Node e do Python, podemos clonar o repositório onde desejar:

```
git clone https://github.com/lauravitalc/processo-dti.git processo-dti
```

Após o repositório ser clonado, iremos instalar a parte do nosso back-end, onde está sendo criada a api.

```
cd backend
pip install virtualenv 
virtualenv -p python3 venv
python3 -m venv venv 
```

O próximo passo é ativar nossa venv, que nada mais é que o nosso ambiente virtual.

No CMD do Windows:
```
venv/Scripts/activate.bat
```

No Powershell do Windows:
```
venv/Scripts/Activate.ps1
```

No Mac:
```
source venv/bin/activate
```

Com o ambiente virtual ativado, agora iremos instalar as depêndencias necessárias para o nosso back-end.

```
pip install -r requirements.txt
```
#### Ativando o Back-End
Executar o comando abaixo dentro da pasta backend:

```
flask run 
```

### Front-End: React

Voltaremos a nossa pasta principal. O próximo passo é configurar o nosso front-end. 
Necessário abrir outro CMD/Powershell, pois não devemos interromper a execução do back-end.

```
cd petshop-choice
npm install react react-dom
```

#### Ativando o Front-End

Executar o comando abaixo dentro da pasta petshop-choice:

```
npm start
```

Em alguns segundos, a aplicação abrirá no navegador. Caso o contrário, acesse pelo link: 
http://localhost:3000

Importante salientar que o arquivo package.json da pasta petshop-choice deve conter a seguinte instância acima de "dependencies":

```
"proxy": "https://localhost:5000",
```

Isso é essencial para o funcionamento da api. Caso algum outro erro aconteça, certifque-se que todas as ferramentas foram sido instaladas corretamente.

## Frameworks e Bibliotecas

 - Flask
 - Flask CORS
 - React
 - Axios

## Premissas e Decisões

Optei por utilizar Python e o framework Flask para o desenvolvimento do back-end da minha aplicação. Essa escolha se deu devido a minha experiência com o Flask em criações de API. 

Para o front-end, escolhi o React. Apesar de estar aprendendo ainda, e o uso do framework ter sido considerado opcional, decidi ainda sim optar por ele, já que é utilizado pela empresa e poder colocar meus conhecimentos em prática.

Utilizei a biblioteca Axios para me auxiliar na integração do lado do servidor com o do cliente. Tive bastante dificuldade em consumir a api, afinal eu nunca havia utilizado o Axios anteriormente. Passei grande parte do tempo lendo as documentações.

Infelizmente não consegui fazer testes e validações do formulário, devido ao prazo e por ter tido mais dificuldade em outras áreas do código. Optei por priorizar o funcionamento, para posteriormente poder refinar a aplicação.

De modo geral, creio que consegui um bom resultado na minha aplicação, considerando o prazo de entrega. 