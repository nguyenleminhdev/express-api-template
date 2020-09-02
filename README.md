# EXPRESS SERVER API (v2.0.0)

## 1. PROJECT STRUCTURE

```
|- server/ (Nodejs code folder)
    |- api/ (Project business functions)
        |- controllers/ (Api business logic)
        |- models/ (Databse schema)
        |- policies/ (Api middleware role)
        |- requests/ (Custom http requests)
        |- response/ (Custom http response)
        |- services/ (Heplper functions)
    |- configs/ (Project config file)
        |- database/ (database config)
        |- env/ (project env)
        |- socket/ (socket config)
        |- ... (app core logic)
    |- public/ (Static file serve)
    |- .gitignore (Ignore git config)
    |- app.js (Nodejs main file)
    |- Dockerfile (Docker image config file)
    |- package.json (Npm config file)
    |- package-lock.json (Version lock file)
    |- pm2.json (Pm2 config file)
|- docker-compose.yml (Docker compose config file)
|- README.MD (Framework guides)
```

## 2. FEATURE

3. [Readfile (fs module)](https://nodejs.org/api/fs.html)
11. [Request 3rd uri (request module)](https://www.npmjs.com/package/request)
15. [JWT token](https://www.npmjs.com/package/jsonwebtoken)
- Generate
- Verify
- [Decode](https://www.npmjs.com/package/jwt-decode) 
16. [Uuid generate](https://www.npmjs.com/package/uuid)
17. [Password hash salt (bcryptjs module)](https://www.npmjs.com/package/bcryptjs)
18. [AES 256](https://www.npmjs.com/package/aes256)
- encript
- decript
19. [Upload file (multer module)](https://www.npmjs.com/package/multer)
20. [Html string to dom (jsdom module)](https://www.npmjs.com/package/jsdom)
21. [Character encoding (iconv-lite module)](https://www.npmjs.com/package/iconv-lite)
22. [Stack queue (bull module)](https://www.npmjs.com/package/bull)
23. [Domain parser (psl module)](https://www.npmjs.com/package/psl)