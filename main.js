/* /*class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Gabriel';

    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista =  new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();
*/

/*class Mathe{
    static soma(a,b){
        return a + b;
    }
}

console.log(Mathe.soma(5,2));

const usuario = {nome: 'Gabriel'}; //para mudar valor de variável const devemos fazer a mutabilidade
usuario.nome = 'Jão';
console.log(usuario);


function teste(x){
    let y = 2;

    if(x>5){
        console.log(x,y);
    }
}

teste(10);

//manipulação de array
const arr = [1,2,3,4,5];

const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function (item) {
    return item === 4; 
});
console.log(find);



//arrow function
const arr = [1,2,3,4,5];

const newArr = arr.map(item => item*2);

console.log(newArr);

const teste = () => ({nome: 'Gabriel'});
console.log(teste());



//valores padrão
const soma = (a = 3, b = 4) => a+ b;

console.log(soma(1));
console.log(soma());



//desestruturação de objetos
const user = {
    nome: 'Gabriel',
    idade: 22,
    endereco:{
        cidade: 'Nepomuceno',
        estado: 'MG',
    },
};

const {nome, idade, endereco:{estado}} = user;

console.log(nome);
console.log(idade);
console.log(estado);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(user);


//rest
const arr = [1,2,3,4,5];
const [a,b,...c] = arr;
console.log(a);
console.log(b);
console.log(c);


function soma(a, b, ...params){
    return b + params.reduce((total, next) => total + next);
}
console.log(soma(1,2,3,4,5));


//spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    nome: 'Gabriel',
    idade: 22,
    curso: 'Engenharia de Computação',
};

const user2 = {...user1, cpf: '312312312-33'};
console.log(user2);


//sintaxe curta de objeto
const nome = 'Gabriel';
const idade = 22;

const eu = {
    nome,
    idade,
    curso: 'Engenharia de Computação',
};
console.log(eu); */


//exercicio1
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;    
    }

    isAdmin(){
        if(this.admin){
            return true;
        }else{
            return false;
        }
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) 
console.log(Adm1.isAdmin()) 

//exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


const idades = usuarios.map(function(item){
    return item.idade;
});
console.log(idades);

const filtrado = usuarios.filter(function(item){
    return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(filtrado);

const findado = usuarios.find(function (item) {
    return item.empresa === 'Google'; 
});
console.log(findado);


const parte1 = usuarios.filter(function(item){
    return item.idade*2 < 50;
});

parte1.map(function(item){
   item.idade = item.idade*2;
});
console.log(parte1);


//exercicio 3
const arr = [1, 2, 3, 4, 5];
const res1 = arr.map(item => item + 10);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

new Promise((resolve, reject) => {
    resolve();
});

//exercicio 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//exercicio 4.2
function mostraInfo({nome, idade}) {
    console.log(`${nome} tem ${idade} anos.`);
}
mostraInfo({ nome: 'Diego', idade: 23 });


//exercicio 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//exercicio 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);

const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade:'Lontras' }};
console.log(usuario3);


//exercicio 6
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);


//exercicio 7
const nome = 'Diego';
const idade = 23;
const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};
console.log(usuario)
