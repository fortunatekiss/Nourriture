# centos 7.2 64bit
yum -y install npm mysql mongodb
npm install -g n express express-session express-router cookie-parser mysql ejs multiparty
n stable
mkdir /home/www/Nourriture
cp Server.js /home/www/Nourriture/Server.js
node /home/www/Nourriture/Server.js