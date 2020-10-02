// EXEMPLO 01

// CLASS List PAI 
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         //console.log(this.data);
//     }
// }
// // CLASS TodoList FILHA
// class TodoList extends List{
//     constructor() {
//         super(); // chama o construct da classe pai

//         this.usuario = 'Bruno';
//     }

//     mostraUsuario() {
//         //console.log(this.usuario);
//         // Output Bruno

//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

//class TodoList2 {
    // constructor() {
    //     this.todos = [];
    // }

    // Quando tiver um metodo statico em uma classe, não precisa do constructor, a classe com o metodo statico servirá 
    // apenas para fazer alguma coisa

    // static addTodo() { 
    //     this.todos.push('Novo todo');
    //     console.log(this.todos);
    // }
// }

// Vai dar erro
//TodoList2.addTodo();
//TodoList2.addTodo();
//TodoList2.addTodo();
//TodoList2.addTodo();

// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// classe.metodo(value)
// console.log(Matematica.soma(1,2)); 
// Output 3


/*** CONST & LET ***/
 
/* 
    Usando contante um valor não pode ser reatribuido a variavel

    const a = 1; 
    a = 3;

    Output: Uncaught Error: "a" is read-only 

*/

// Mutação é possível em uma constante
// Quando se mantém o mesmo formato do objeto modificando apenas o valor, será possível alterar o valor da constante.
// const usuario = { nome: 'Bruno' };

// usuario.nome = 'Cleiton'
// console.log(usuario);

// Variaveis de scopo

// function teste(x) { // scopo 1
//     let y = 2;

//     if(x > 5) { // scopo 2
//         let y = 4; // reatribuição no valor de y
//         //console.log(x,y);
//     }
// }

//console.log(y);
// Output: Uncaught ReferenceError: y is not defined
// y está fora do scopo da function teste()

// teste(10);


/*** ARRAY OPERATIONS ***/

// const arr = [1,3,4,5,8,10];

// map() - percorre por cada item do array e retorna alguma ação que a gente precisa.
// const newArr = arr.map(function(item, index) {
   //  return item + index;
// })

// console.log(newArr);

// reduce() - consome o array e transforma em um unico valor
// const sum = arr.reduce(function(total, next) {
   // return total + next; // o resultado aqui é jogado para o parametro total da segunda iteração.  
// })

// console.log(sum); 
// Output 30

// ITERAÇÃO 1
// 0 total
// 1 next

// ITERAÇÃO 2
// 1 total -> o valor do total é a soma do total + next da ITERAÇÃO anterior
// 3 next 

// ITERAÇÃO 3
// 4 total
// 4 next

// ITERAÇÃO 4
// 8 total
// 5 next

// ITERAÇÃO 5
// 13 total
// 8 next

// ITERAÇÃO 6
// 21 total
// 9 next

// ITERAÇÃO 7
// 30 total
// --

// Pegando todos os items pares do array
// const filter = arr.filter(function(item) {
   // return item % 2 === 0; // o retorno do filter tem que ser TRUE ou FALSE
// })

// console.log(filter);


// Verifica se existe algum item no array
// const find = arr.find(function(item){
   // return item === 2;
// });

//console.log(find);

/*** ARROW FUNCTION ***/

/*
    exemplo de uma função normal
    
    const arr = [1,3,4,5,8,10];

    const newArr = arr.map(function(item, index) {
        return item + index;
    })

*/
// Utilizado sempre que for um callback/função anonima
// 1º remove a palavra function
// 2º coloca => antes do {}
// 3º quando existe apenas 1 parâmetro, pode-se remover os parenteses do parâmetro
// 4º quando retorna simplesmente apenas um resultado e não várias linhas, remove as {} e o return.
// const numbers = [1,3,4,5,8,10];

// const x = numbers.map(item => item * 2);

// console.log(x);
// Output: [2,6,8,10,16,20]

// Outra feature do ES6
// criar função utilizando constante - não é recomendado.

// function teste() {}

// é a mesma coisa

//const teste = () => [1,2,3]; // o babel quebra
//const teste = () => 'teste'; // o babel quebra
//const teste = () => ({ nome: 'bruno' }); // o babel quebra
//const teste = () => { return { nome: 'bruno' } }; // o babel quebra

//console.log(teste());


/*** VALORES PADRÃO NOS PARAMETROS DAS FUNCTIONS ***/

/*  
    function soma(a = 3, b = 6) {
        return a + b;
    }

    // arrow function
    const soma = (a = 3, b = 6) => a + b;

*/

// console.log(soma(1));
// Output: 7
// console.log(soma());
// Output: 9


/*** DESTRUTURAÇÃO DE OBJETOS ***/

// ex: Objeto usuario
// const usuario = {
//     nome: 'Bruno',
//     idade: 26,
//     endereco: {
//         cidade: 'Fortaleza',
//         estado: 'CE',
//     },
// };

// Precisou de 3 linhas para buscar informações de dentro do objeto
// const nome   = usuario.nome;
// const idade  = usuario.idade;
// const cidade = usuario.endereco.cidade;

// console.log(nome); // Output Bruno
// console.log(idade); // Output 26
// console.log(cidade); // Output Fortaleza

// exemplo de destruturação no ES6
// pega nome e idade do objeto usuario.
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome); // Output Bruno
// console.log(idade); // Output 26
// console.log(cidade); // Output Fortaleza

/* 
    ex:

    function mostraNome({ nome, idade }) {
        console.log(nome, idade); // Output Bruno, 26
    }

    mostraNome(usuario);

*/

/*** REST OPERATIOR ***/

// Utilizando REST Operatior em objeto
// const usuario = {
//     nome: 'Bruno',
//     idade: 26,
//     empresa: 'AreaDev'
// };

// pega a key nome e as demais key é atribuida a variavel resto.
// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// Utilizando REST Operatior em array
// const arr = [1,2,3,4];

// 1 é atribuido ao a
// 2 é atribuido ao b
// 3 e 4 é atribuido ao c
// const [ a, b, ...c] = arr;

// console.log(a); Output: 1
// console.log(b); Output: 2
// console.log(c); Output: 3

// Utilizando REST Operatior em funções
/* 
    function soma(a, b, c, d) {
        return a + b + c + d;
    }

    console.log(soma(1, 3, 4, 5)); // Output 13

    pra não ter que ficar inserindo parametro e valor ao invocar a função soma()
    Utiliza-se o redux()
*/

/*
    Os valores passados na função soma(), serão convertidos em formato de array
    
    function soma(...params) {
        return params;
    }

    console.log(soma(1,3,4)); // Output [1,3,4]
*/ 

/*  
    Exemplo com reduce()

    function soma(...params) {
        return params.reduce((total, next) => total + next);
    }

    console.log(soma(1,3,4)); // Output 8
*/

/*
    a = 1
    b = 3
    params = 4,5,6,7

    function soma(a, b, ...params) {
        return params;
    }

    console.log(soma(1,3,4,5,6,7)); // Output [4,5,6,7]
*/


// SPREAD OPERATIOR

/*
    // faz um merge de arrays
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const arr3 = [...arr1, ...arr2];

    console.log(arr3); // Output [1,2,3,4,5,6]

*/

/*
    const usuario1 = {
        nome: 'Bruno',
        idade: 23,
        empresa: 'AreaDev',
    };

    // atribui todas as keys a variavel usuario2, porém a key nome terá um novo valor
    const usuario2 = { ...usuario1, nome: 'Kiedis' };

    console.log(usuario2); // Output: { nome:'Kiedis', idade:23, empresa:'AreaDev' }

*/

/*** TEMPLATES LITERALS ***/

// const name = 'Bruno';
// const idade = 23;

// Muita concatenação
// console.log('Meu name é ' + name + ' e tenho ' + idade + ' anos'); // mais verbosa

// Menos concatenação
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); // mais clean

/*** OBJECT SHORT SYNTAX/SINTAXE CURTA DE OBJETO ES6 ***/
/*
    const nome = 'Bruno';
    const idade = 26;

    const usuario = {
        nome: nome,
        idade: idade,
        empresa: 'AreaDev',
    }

    console.log(usuario); // Output: { nome:"Bruno",idade:26,empresa:"areadev" }
*/

// No ES6, quando a variavel é o mesmo nome da key, pode-se remover o value e deixar so a key.

/*
    // Ex:
    
    const nome = 'Bruno Kiedis';
    const idade = 21;
    const empresa = 'Area51';

    const usuario = {
        nome,
        idade,
        empresa,
    }

    console.log(usuario);
*/


/*** WEBPACK CONFIG ***/

/*** IMPORT ***/
// Importe a função soma e sub do arquivo funcoes
// import { soma, sub } from './funcoes';

// Caso queira renomear a função soma, basta colocar "as" e o nome que deseja. nesse caso a função soma não está definido como default no export da mesma.
// import { soma as somaValores, sub } from './funcoes'; ARQUIVO REMOVIDO PARA ORGANIZAR O WORKFLOW

// quando tiver uma função default coloque-a fora do objeto e as demais dentro do objeto
// import mult, { soma, sub } from './funcoes'; ARQUIVO REMOVIDO PARA ORGANIZAR O WORKFLOW

// pode-se importar todas as funções em um unico objeto
// import * as funcoes from './funcoes'; ARQUIVO REMOVIDO PARA ORGANIZAR O WORKFLOW
// console.log(funcoes.soma(1,2));
// console.log(funcoes.sub(3,2));

// nesse import não precisa de {} pois no arquivo soma.js a função está definida como default.
// ao definir default na função, ao importar podemos dar qualquer nome a função.
// import somaValores from './soma'; ARQUIVO REMOVIDO PARA ORGANIZAR O WORKFLOW

//console.log(mult(3,3));
//console.log(somaValores(2,2));
//console.log(soma(6,2));
//console.log(sub(6,2));

//alert('ES6');

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('0K') }, 2000);
// });

// Apartir do momento em que definimos o async a uma função, essa função passa a ser uma promise,
// podemos esperar o resultado da promise utilizando o .then() ou o await
// async function executaPromise() {
     // FORMA RECOMENDADA
//     console.log(await minhaPromise()); 
//     console.log(await minhaPromise()); 
//     console.log(await minhaPromise()); 

    // FORMA VERBOSA
    // minhaPromise().then(response => {
    //     console.log(response);

    //     minhaPromise().then(response => {
    //         console.log(response);
            
    //         minhaPromise().then(response => {
    //             console.log(response);
    //         })
    //     })
    // })
    
    //const response = await minhaPromise(); // a variavel response aguarde minhaPromese()

    // console.log(response); 
    // Output: Uncaught ReferenceError: precisa instalar uma lib para poder utilizar o Async/Await no babel
    // O Async/Await é uma feature do ES8 e ainda não está integrado ao babel-preset-env
// }

// executaPromise(); // executaPromise() só será executada, quando a função minhaPromise() retorna algo.

// EX:

// const executaPromise = async () => {
//     console.log(await minhaPromise()); // o await tem que está dentro do scopo do assync
//     console.log(await minhaPromise()); // o await tem que está dentro do scopo do assync
// };

// executaPromise();

// import axios from 'axios';

// class Api {

//     // transformamos o metodo statico em uma função assincrona com o async
//     // o try e catch são utilizados no async/await para tratar erros
//     static async getUserInfo(username) {

//         try {

//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);

//         } catch (err) {
            
//             console.warn('Erro na API');
//         }

//     }
// }

// Api.getUserInfo('brunolimadevelopment'); // Output: { data: {...} }
// Api.getUserInfo('brunolimadevelopment1220'); // Output: Erro na API
import api from './api'

class App {
    constructor() {
        this.repositories = [];

        this.formEl  = document.getElementById('repo-form');
        this.listEl  = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }

    // registra o evento
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    // insere a mensagem carregando...
    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
                loadingEl.appendChild(document.createTextNode('Carregando...'));
                loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);

        } else {
            document.getElementById('loading').remove();
        }
    }


    // add o repositorio no array
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        // se o valor do input for igual a 0 pare a execução com o return.
        if(repoInput.length === 0) 
            return;

            this.setLoading();

            try { // o try funciona como o then() da promisse

                const response = await api.get(`/repos/${repoInput}`);
                
                const { name, description, html_url, owner: { avatar_url } } = response.data;   
                
                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url,
                });
                
                this.inputEl.value = '';
                
                this.render();

            } catch (err) {
                alert('O repositório não existe!');
            }

            this.setLoading(false);

    }

    // apaga todo o conteudo da lista e renderizar do zero.
    // percorre todo array mostrando cada item la dentro.
    render() {
        this.listEl.innerHTML = '';

        // o forEach so percorre os items do array
        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);
            
            let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
                linkEl.setAttribute('href', repo.html_url);
                linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
                listItemEl.appendChild(imgEl);
                listItemEl.appendChild(titleEl);
                listItemEl.appendChild(descriptionEl);
                listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();