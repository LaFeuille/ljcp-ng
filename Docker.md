Two options are available. I prefer the docker compose technique

Option 1) You can run docker build and docker run

  ```
  docker build --rm -f Dockerfile -t ljcp-ng:latest .
  docker run --rm -d -p 443:443 -p 80:80 ljcp-ng:latest
  ```

Option 2) You can run docker compose `docker-compose up -d --build`
