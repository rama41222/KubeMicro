## Setup docker images

##### Setting up Microservice 1
```
cd ./micro-service-1
docker build ./ -t <dockerhub username>/m1
docker push <dockerhub username>/m1
```

##### Setting up Microservice 2
```
cd ./../micro-service-2
docker build ./ -t <dockerhub username>/m2
docker push <dockerhub username>/m2
```

## Setup kubernetes
cd into the kube folder
```
kubectl create -f pod-micro-serivce-one.yaml
kubectl create -f pod-micro-serivce-two.yaml
```
### Expose the ports
```
kubectl expose pod micro-service-one --type=NodePort --name micro-service-one
kubectl expose pod micro-service-two --type=NodePort --name micro-service-two
```

## Testing the services
```
minikube service micro-service-one --url
# should output an endpoint url
```

### Endpoint Definitions
```
curl http://<kubernetes ip>:port/ # hello world from serivce one
curl http://<kubernetes ip>:port/services  # calls micro-service-two 

```