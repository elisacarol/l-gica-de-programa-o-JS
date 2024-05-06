## Setup inicial de um repositorio do Github no Visual Studio Code local

1. Limpar credenciais do Windows / Sistema
2. Limpar os dados do navegador 
3. Abrir o meu repositorio no Github 
4. Copiar a url do repositorio (HTTPS)
5. Abrir o VS Code 
6. Se houver algum projeto aberto no VS Code,
então feche com (Ctrl + K e o F sozinho)
7. Se houver algum usuário logado então clique sair 
8. Verificar as variaveis globais user.name e user.email:
~~~bash
git config --global user.name
git confib --global user.email
~~~
9. Se as variaveis retornarem algum valor, redefina ambas as variaveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.mail
~~~
10. Faça a clonagem do repositóiro no computador local:
~~~bash
git clone  https://github.com/elisacarol/l-gica-de-programa-o-JS.git
~~~
11. Abra o projeto clonado no Vs Code:
~~~bash
code -r (repositorio_local)/
~~~
12. Faça login no VS Code local para sincronizar suas extensões e 
13. Ative o salvamento automatico _(Auto Save)_: Arquivo > Salvamento automatico

FINALIZAR 
1. Git add .
2. Configurar email/usuario antes de fazer o commit
~~~bash
git config user.name "elisacarol"
git config user.email "carolina_sec21@hotmail.com"
~~~
3. git commit -m "documento de instrução"
4. git push origin.main

# COMMIT 

Como escrever o GIT COMMIT com varios
=> git add  
=> git commit -m"style: estilizando as páginas gerais do projeto"
=> git status

Agora fazer o README.md
=> git add README.md
=> git commit -m"docs:acrescentando a documentação da ulitima modificação"
=> git status

agora somente no que eu fiz correção:
=> git add desafio3.js
=> git commit -

mudar o padrao do editor 
=> git add exercicios/busca-nome.html
=> git config --global core.editor "code --wait" ( está orientando o editor padrão muda ele para o VSCode)

=> git commit
=> abrirá a mensagem e nela digitar => abrirá o feat (para declarar a alteração): melhoria no botão da página busca-nome
    Implementada uma melhoria na descrição do botão que realiza a açõao de confimarção 
=> clicaabrirá a mensagem e nela digitarr no botão de aceitar

Volta o git status:

=> git add .
=> git commit => : chore: criando o arquivo para o próximo desafio

para ver a estrutura de Commits atualizar o VS Code com Git Graph

para apagar os commits digitar:
=> git rebase -i HEAD~5 (modifica o histórico do GIT)

Usar a plataforma para aprender o Learn Git Branching
