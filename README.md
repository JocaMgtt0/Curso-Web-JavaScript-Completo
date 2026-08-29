# JavaScript Studies

Repositório de estudos de desenvolvimento web, dos fundamentos do JavaScript até Node.js.
Reúne **128 arquivos** organizados por tema.

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white" alt="npm">
</p>

---

## Conteúdo

| Pasta | Tema | Arquivos |
|---|---|---:|
| [`introducaoAWeb/`](./introducaoAWeb) | Como a web funciona: cliente, servidor e requisições | 1 |
| [`html/`](./html) | Estrutura HTML e marcação semântica | 6 |
| [`fundamentos/`](./fundamentos) | Tipos, variáveis, `let` e `const`, coerção, escopo e `this` | 30 |
| [`controle/`](./controle) | Condicionais, laços e operadores lógicos | 7 |
| [`funcao/`](./funcao) | Funções, arrow functions, callbacks, closures e parâmetros | 23 |
| [`Objeto/`](./Objeto) | Objetos, desestruturação, protótipos e classes | 17 |
| [`Array/`](./Array) | Métodos de array: `map`, `filter`, `reduce`, `forEach`, `flatMap`, `concat` | 17 |
| [`Node/`](./Node) | Node.js: módulos, `require`, npm e manipulação de arquivos | 24 |

## Como executar

Requer **Node.js 18 ou superior**.

```bash
git clone https://github.com/JocaMgtt0/Javascript-studies.git
cd Javascript-studies
npm install
```

Cada arquivo é independente e roda direto:

```bash
node Array/filter.js
node fundamentos/escopo.js
```

Os arquivos da pasta [`html/`](./html) são abertos direto no navegador.

A única dependência é o **lodash**, usada nos exemplos da pasta `Node/`. Se você só quer rodar os
arquivos de fundamentos, o `npm install` nem é necessário.

## Um ponto de destaque

A pasta [`Array/`](./Array) é a mais útil para consulta. Ela cobre os métodos funcionais um por
um, cada um em seu próprio arquivo, com variações numeradas (`filter.js`, `filter1.js`,
`filter2.js`) mostrando o mesmo método em situações diferentes. Serve como referência rápida
quando bate a dúvida de qual método usar.

## Créditos e licença

O conteúdo acompanha o curso **Web Completo**, de Leonardo Moura Leitão (Cod3r). Os exercícios
foram resolvidos por mim, mas a estrutura das aulas e parte do código base são material do curso.

Por isso este repositório **não tem licença aberta**: o material didático não é meu para
relicenciar. Ele está público como registro de estudo, não como código reutilizável.
