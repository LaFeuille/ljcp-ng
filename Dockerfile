FROM nginx:alpine
COPY dist/ljcp-ng /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
