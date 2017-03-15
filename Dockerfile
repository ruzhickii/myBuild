FROM docker.itteam.com.ua/root/itteam:CentosNodeJS_base3
RUN git clone -b next https://gitlab-ci-token:ZNHskH1_mNZj5Vbc5jCF@gitlab.itteam.com.ua/pchabanov/web.git /var/www/html/www
RUN npm i
