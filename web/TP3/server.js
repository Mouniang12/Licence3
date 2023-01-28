var http = require("http");
var fs  = require("fs");

http.createServer((req, res) => {
  // Lire le fichier JSON contenant la liste d'éléments
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      // Parser les données JSON
      const list = JSON.parse(data);

      
      // Envoyer la réponse avec les éléments
      res.write(200, {'Content-Type': 'text/html'});
      res.end('<li>' + list.pokemons.join('</li><li>'));
    }
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');
