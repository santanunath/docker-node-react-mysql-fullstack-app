# Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy

Step1:
Clone this repo in your PC/laptop/vps

Step2:
Run `npm install` inside the 'frontend' directory. It installs packages mentioned under the heading 'dependencies' in file package.json

Step3:
Run `npm install` inside the 'backend' directory. It installs packages mentioned under the heading 'dependencies' in file package.json

Step4:
Run `docker-compose up --build` inside the main project directory

Step5:
Access the Adminer using route `http://localhost:8000/`


to login, use `mysql_db` as the server, username as `root` and password as `MYSQL_ROOT_PASSWORD`.

Step6:
To start interacting with the application, open `http://localhost:80/` in a browser. Note: Nginx server is running @port80.

Check out the step by step explained guide [here](https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)

https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/ (not working)


https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-node-js-mysql-and-nginx/

(By: victor garcia)
https://mentorcruise.com/blog/how-to-dockerize-a-react-app-and-deploy-it-easily/ 
