# grpc-node-k6-example
[![CircleCI](https://circleci.com/gh/lynix28/grpc-node-k6-example/tree/master.svg?style=shield)](https://circleci.com/gh/lynix28/grpc-node-k6-example/tree/master)

GRPC automation test example with NodeJS (as Server) and K6 by Grafana Labs (as Client)

<h3><ins>How to setup and run the test</h3>
  
1. Clone this repository
  
2. Build GRPC Dummy Server with `Dockerfile` (file provided)
    - execute `docker build -t <your_image_tag> <path/to/Dockerfile>`
    - start the server `docker run --name <"your_container_name"> -p 50051:50051 -d <your_image>`
  
3. Install K6 and run it with command
    - `k6 run -e IPaddress=localhost ./client/tests/run_test.js`
  
<h3><ins>How the report look like</h3>
  
![image](https://github.com/lynix28/grpc-node-k6-example/assets/102797648/75210e59-f1fc-4c53-872d-6152d77cb7a9)
