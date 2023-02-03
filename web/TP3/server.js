/*var http = require("http");
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

      
    
    }
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');
*/

var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer((req, res) => {
  // Read the JSON file containing the list of elements
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      // Parse the JSON data
      const list = JSON.parse(data);

      // Check if the request is a form submission
      if (req.method === "GET" && req.url.includes("/add")) {
        // Parse the query parameters
        const query = url.parse(req.url, true).query;

        // Add the new element to the list
        list.pokedex.push(query.newPokemon);

        // Save the updated list to the JSON file
        fs.writeFile('data.json', JSON.stringify(list), (err) => {
          if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
          } else {
            // Send a response with the updated list
            res.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'});
            res.write("<input type = 'text'> ");
            res.write("<button>Add Pokemon</button>");
            res.write('<h1>Pokedex</h1>');
            res.end('<li>' + list.pokedex.join('</li><li>'));
          }
        });
      } else {
        // Send a response with the list
        res.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'});
        res.write("<form action='/add' method='get'> <input type='text' name='newPokemon'> <input type='submit' value='Add Pokemon'> </form>");
        res.write('<h1>Pokedex</h1>');
        res.end('<li>' + list.pokedex.join('</li><li>'));
      }
    }
  });
}).listen(4000);

console.log('Server running at http://localhost:4000/');
