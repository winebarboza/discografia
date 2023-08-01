# Discografia - Tião Carreiro e Pardinho

Projeto desenvolvido em ReactJs sobre a discografia da dupla sertaneja Tião Carreiro e Pardinho, nesse projeto o usuário consegue adicionar, excluir e consultar seus álbuns e músicas favoritos da dupla.

---

## Demonstração

### [Link da aplicação](https://discografia-tiao-e-pardinho.vercel.app/)


![screen-gif](./public/assets/gif-demonstração.gif)

---

## Funcionalidades da aplicação

- Adicionar um novo álbum
- Adicionar uma nova música ao álbum
- Excluir álbum completo
- Excluir uma música específica
- Pesquisar um álbum específico

## Tecnologias utilizadas

![My Skills](https://skills.thijs.gg/icons?i=js,html,css,react,styledcomponents,)

## Aprendizados

- O que você aprendeu construindo esse projeto?

Nesse projeto eu pude aprender a utilizar rotas com a biblioteca react-router para navegar entre os formulários de cadastro de música e álbum, também aprendi a navegar com parâmetros pela url com o hook useParams do react-router, utilizei esses dados para agilizar no envio deles para outra rota ou para API caso fosse preciso, também fiz chamadas a API utilizando Fetch API enviando os parâmetros necessários junto com o token de autorização para o sucesso da requisição.

- Quais desafios você enfrentou e como você superou-os?

Enfrentei alguns problemas no meio do desenvolvimento da aplicação com as chamadas a API por estar passando de maneira errada os parâmetros, mas que logo foi resolvido quando consultei projetos antigos para comparar os códigos e pesquisei a documentação para identificar o que eu estava errando, no fim descobri que haviam alguns erros de sintaxe e tudo deu certo após corrigir.


## Instalação

Siga as etapas abaixo para clonar o projeto e instalar as dependências necessárias:

1.Certifique-se de ter o Node.js instalado em sua máquina.

2.Clone este repositório para o seu ambiente local:

```bash
 git clone https://github.com/winebarboza/discografia.git
```
3.Navegue para o diretório do projeto:

```bash
cd discografia
```
Instale as dependências do projeto com o gerenciador de pacotes npm ou Yarn:

Usando npm:

```bash
npm install
```
Usando yarn:

```bash
yarn install
```
## Executando o Projeto

Para executar o projeto localmente, siga as etapas abaixo:

Certifique-se de estar no diretório raiz do projeto (onde o arquivo package.json está localizado).

Execute o seguinte comando com o gerenciador de pacotes escolhido:

Usando npm::

```bash
npm start
```
Usando yarn:
```
yarn start
```
O aplicativo será aberto automaticamente no seu navegador padrão em http://localhost:3000/. Se não abrir automaticamente, basta digitar esse endereço no seu navegador.
