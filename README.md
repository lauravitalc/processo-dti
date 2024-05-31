
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

Em alguns segundos, a aplicação abrirá no navegador.
