You can run docker build and docker run

  ```
  docker build --rm -f Dockerfile -t ljcp-ng:latest .
  docker run --rm -d -p 443:443 -p 80:80 ljcp-ng:latest
  ```
