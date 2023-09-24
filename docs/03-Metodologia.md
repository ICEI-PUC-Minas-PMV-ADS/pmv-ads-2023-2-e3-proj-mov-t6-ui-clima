
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

## Relação de Ambientes de Trabalho

Os atributos do projeto foram desenvolvidos a partir das plataformas GitHub e (a definir), e a relação dos ambientes está apresentada na tabela abaixo.

| Ambiente | Plataforma | 
--------- | ---------- |  
| Repositório de código fonte | [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t6-ui-clima) |
| Documentos do projeto | [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t6-ui-clima) |
| Projetos de Interface | [Figma](https://www.figma.com/file/8wZ1umCXSNboPnVecRYumE/UI-CLIMA---WIREFRAMES?type=design&node-id=0%3A1&mode=design&t=rVgHehOWtL02bH9i-1) |
| Gerenciamento do Projeto | [Github](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/502)  |
| Comunicação e Reuniões | [Teams](https://teams.microsoft.com/_), [WhatsApp](https://web.whatsapp.com/) |

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t6-ui-clima/assets/143143872/dfda054d-6409-4759-a05b-5e784b7394e4)

- `main`: versão estável já testada do software
- `develop`: versão em testes do software, instável
- `feature/feature-name`: versão do software em construção de uma nova funcionalidade
- `bug/bug-name`: versão do software em construção, correção de uma funcionalidade

Ao iniciar o desenvolvimento de uma nova funcionalidade é criada uma nova branch `feature/feature-name` a partir da branch develop ao final do desenvolvimento deverá ser feito o merge com a branch 
`develop`.

Os testes serão realizados sempre na branch `develop` após a realização dos testes e garantia que a nova funcionalidade está estável deverá ser feita um merge da branch `develop` com a branch `main`.


## Gerenciamento de Projeto

### Divisão de Papéis
Apresente a divisão de papéis entre os membros do grupo.
- Scrum Master: André Paiva;
- Product Owner: Gabriel Alisson dos Santos Oliveira;
- Equipe de Design:
  - Íris Gabriela Queiroz Gonçalves;
- Equipe de Desenvolvimento:
  - Luna Alcantara Reis Silva;
  - Leonardo Rodrigues Barbosa Maia;

### Processo
A ferramenta Github Board será utilizada para gerência de tarefas 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t6-ui-clima/assets/143143872/3d07e983-4ad5-4e5d-bd9d-5d5bf01ea1fc)

Backlog - Todas as tarefas a serem executadas no projeto (independente da etapa/sprint)
Current Sprint - Todas as tarefas a serem executadas na etapa atual do projeto
In Progress - tarefas em progresso
Validation - funcionalidades em teste
Done - tarefas finalizadas

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

### Ferramentas

As ferramentas empregadas no projeto são:

|FERRAMENTA `(Solução Tecnologica)`| SOLUÇÃO ... `(Descrição das ferramentas utilizadas)` |
|--------------------|-----------------------------------|
| Editor de Código | VSCode |
| Gerenciamento de Projeto | Github |
| Comunicação | As ferramentas utilizadas na comunicação foram o Microsoft Teams, Google Meets e WhatsApp.|
| Desenho e Prototipação| A ferramenta escolhida para o desenvolvimento de wireframes e mockups foi o Figma. |

A escolha do ambiente codificação se deve à sua integração com o sistema de controle de versão e a facilidade de desenvolvimento com as tecnologias empregadas no projeto.
A documentação se encontra no Github, ferramente de fácil acesso à toda equipe
