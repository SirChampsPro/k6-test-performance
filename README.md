Requisitos:

GitBash
VSCode

Para rodar:

Após realizar o clone do projeto e abri-lo no vscode, abrir o terminal e rodar o comando: k6 run index.js --vus 500 --duration 300s
Isso fará com que a execução simule 500 usuários simultâneos por 5 minutos.

Ao finalizar a execução será gerado um arquivo de evidências na pasta "scenarios" chamado "report.html"

Ao realizar alterações no projeto e subir para o git o mesmo roda uma pipeline gerando um arquivo de evidência compilado para download e conferência dos resultados de execução.
