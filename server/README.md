# Project structure

[+] api: Project business login
 |- [+] controller: Business api logic
 |- [+] response: Json response template
[+] config: All project config
 |- (x) blueprint: Json api prefix config
 |- (x) global: Global package require
 |- (x) http: Json body parser
 |- (x) log: Config api log level
 |- (x) router: Config default router and catch error server
 |- (x) socket: Config socket.io
 |- (x) view: Config static content location
[+] public: Static content serve
(x) app.js: Start file
(x) Dockerfile: Config of docker image with node.js and pm2 eviroment
(x) processes.json: Pm2 config file