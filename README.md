
### K8 Lab

```
docker build . -t k8-lab-image
```

testing the app with a Service LoadBalancer

```
kubectl apply -f .k8s/service/service-as-lb.yml
```

test app endpoint

```
curl http://localhost:8089
```