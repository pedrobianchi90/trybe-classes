15.2 = Redux no React

Checklist react-redux: Passo a passo para guardar no coração e colar na parede

npx create-react-app my-app-redux;
npm install redux react-redux;
npm install.

1 - Criar dentro do diretório src:
diretório actions;
diretório reducers;
diretório store.

2 - Criar dentro do diretório actions:
arquivo index.js.

3 - Criar dentro do diretório reducers:
arquivo index.js.

4 - Criar dentro do diretório store:
arquivo index.js.

5 - Em src/index.js:
definir o Provider, <Provider store={ store }> , para fornecer os estados à todos os componentes encapsulados em <App /> .

Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
npm install react-router-dom@v5;

6 - Em src/index.js:
definir o BrowserRouter, <BrowserRouter> .

7 -No arquivo App.js:
definir o Switch, <Switch> ;
definir a Route, <Route> .

O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.
Caso necessário:
criar o diretório components;
criar o diretório pages.

8 - No arquivo store/index.js:
importar o rootReducer e criar a store;
configurar o Redux DevTools.

9 - Na pasta reducers:
criar os reducers necessários;
configurar os exports do arquivo index.js.

10 - Na pasta actions:
criar os actionTypes;
criar as actions necessárias.

11 - Nos componentes:
criar a função mapStateToProps se necessário;
criar a função mapDispatchToProps se necessário;
fazer o connect se necessário.
