TCP/IP: Transission Control Protocol / Internet Protocol

Web fica ligada por meio de 'teias'

aplicacao
|       ^
|       |
tranposte
|       ^
|       |
internet
|       ^
|       |
rede fixa

Server Side -> Conteudo é gerado no servidor e mandado para o "front-end" para ser renderizado, ou seja, ele 
basicamente vai ficar tudo orquestrado no servidor e o servidor vai gerar ate o proprio HTML

O Client Side -> é as famosas aplicacoes "Front-end" onde no servidor fica apenas as regras de negocio da sua aplicacao, onde 
é feito o processamento das regras e no lado do "Cliente" é onde é gerado o codigo do front, por isso é muito utilizado
frameworks como react, vue, entre outros para gerar esses codigos na aplicacao do cliente, o HTMl é gerado dinamicamente 
pelo proprio JavaScript, e ai a sua aplicacao consume o que precisa do servidor porem o html, css, etc é gerado dinamicamente 
pelo JavaScript no lado do cliente, as famosas SPA (Single Page Applicaiton)


 
Conteudo estatitico: Quando o conteudo é estatico é quando o servidor apenas le arquivos que estao armazenado em disco
e mostra na pagina para o usuario
Conteudo Dinamico: é quando o servidor manda ou gera dados em tempo real para o usuario que esta usando, ou seja, quando
faz uma consulta no banco para atender algum filtro especifico que o usuario selecionou e precisa buscar no banco de dados e tals
    L-> gera o html dinamicamente com base nas acoes do usuario
    L-> cadastro de algum cliente e precisa atualizar a pagina e precisa que a pagina seja atualizada dinamicamente

voce pode fazer uma consulta no banco, gerar uma pagina mais moderna e exibir no front e isso faz com que gere uma pagina estatica com poucas consultas no servidor.
Podemos dizer que um conteudo dinamico é quando o tempo inteiro é feito consulta no banco para atualizar dados, cada açao do usuario depende de um acesso ao banco de dados para fazer uma consulta ou atualizar uma pagina, e o estatico seria uma aplicacao que nao é "atualizada" como se fosse algo estatico que semrpe vai ter a mesma pagina e usar o mesmo html, a mesma single page application


Web Service

trafego de dados de modo textual, pode ser XML, Yaml ou o mais famoso JSON

SOAP (Simple Object Access Protocol)

Baseado em XMl e reponde em formato XML, invoca funcao remota a partir de um prototcolo SOAP
usa um descritor para descrever todos os seus "parametros" para chamar funcoes

REST(Representation State Transfer)

voce faz uma requisicao (put, get, post, delete, etc) e chama por meio de metodos Http para fazer as requisicoes
como fizemos usanod o "Axios"

URL        Metodo  Descricao
/cliente -> post -> incluir 
/cliente -> get -> Obter todos
/cliente/36-> get ->  obtem o 36 (passagem de id, email, etc. Por parametor)
/cliente -> put -> Atualizar
/cliente/3 -> put -> Atualiza um cliente especifico, no caso o cliente 3
/cliente -> delete -> remove Cliente
/clente/45-> delete-> remove o cliente especifico, no caso o 45


SOA:

Voce instala dentro do seu barramento o seu software (no caso seus serviços) para voce poder utilizar e orquestrar processos e servicos entre eles, ou seja, voce instala dentro do ESD

Microservicos:

quebra seu servico em pequenos blocos menores, voce pode ter varios webservices betendo em varios API e juntando todos os microservicos formando um software completo

ex: microservico de playlist do spotfy, que é um microservico especializado apenas para gerar aquela playlist e trabalha em cima do CI/CD Completo deles, ou seja, desenvolver, validar, testar, integrar, etc.

cada software teria um microservico diferente, isso evita ter uma aplicacao so monolitica e permite evoluir de forma mais rapida e maior, do que um servico inteiro completo como funciona o SOA.


escalonamento de infrainstrutura, ou sejam voce pode diminuir ou aumentar a sua capacidade de maquinas e (IASS) dependendo do uso dela, ou seja, se esta usando 20% do processamento voce pode programar para diminuir a quantidade de maquinas alocadas, se tiver 80% de uso, voce pode aumentar o numero de maquinas que estao usando, e assim por diante.

