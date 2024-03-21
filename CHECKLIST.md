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
9. Se as variaveis retonarem algum valor, redefina ambas as variaveis:
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
git config user.email "elisacarol"
~~~
3. git commit -m "documento de instrução"
4. git push origin.main
