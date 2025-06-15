## Build and Dockerize a FullStack React app with Nodejs, MySQL and Nginx (proxy server)

Step1:
> Clone this repo in your PC/laptop/vps.   
$ git clone repo-url

Step2:
> Run   
$ `npm install`   
inside the 'frontend' directory.   
It installs packages mentioned under the heading 'dependencies' in file package.json

Step3:
> Run   
$ `npm install`   
inside the 'backend' directory.   
It installs packages mentioned under the heading 'dependencies' in file package.json

Step4:
> Run   
$ `docker-compose up --build`   
inside the main project directory

Step5:
> Access the Adminer using route    `http://host-ip:8000/`


to login, use    
server: `mysql-db`   
username: `root`   
password: `MYSQL_ROOT_PASSWORD`   
    
Step6:
> To start interacting with the application, open in a browser     
`http://localhost:80/`    
Note: Nginx server is running @port80.

Check out the step by step explained guide [here](https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)


https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-node-js-mysql-and-nginx/

Source code in GitHub:

https://github.com/mosesreigns/Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy


