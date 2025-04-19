// importtação dos pacotes
const http = require('http');
const fs = require('fs'); // módulo para acessar os arquivos

// Definir as configurações do servidor
const hostname = '127.0.0.1';
port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  // define as configuração do cabeçalho da resposta
  res.statusCode = 200; // indica sucesso
  // define o tipo de resposta
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // html

  // obter a url
  const url = req.url;

  // variável para armazenar a página html
  let arquivoHtml;

  // verificar qua a rota informada pelo usuário
  if (url == '/home') {
    // carregar o arquivo html
    arquivoHtml = fs.readFileSync('./public/index.html');
  } else if (url == '/sobre') {
    arquivoHtml = fs.readFileSync('./public/sobre.html');
  } else if (url == '/contatos') {
    arquivoHtml = fs.readFileSync('./public/contato.html');
  } else if (url == '/Localizacao') {
    arquivoHtml = fs.readFileSync('./public/localizacao.html');
  } else if (url == '/jogos') {
    arquivoHtml = fs.readFileSync('./public/jogos.html');
  } else if (url == '/socio') {
    arquivoHtml = fs.readFileSync('./public/socio.html');
  }else {
    arquivoHtml = fs.readFileSync('./public/erro.html');
  }

  res.end(arquivoHtml);

});

// iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});