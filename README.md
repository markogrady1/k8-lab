
### K8 Lab

build Dockerfile

```
docker build . -t k8-lab-image
```

# demo using Service ClusterIP

```
kubectl apply -f .k8s/service-api/service-demo.yml
```

get the clucterIP

```
K8_CLUSTER_IP=$(kubectl get svc -o jsonpath='{.items[0].spec.clusterIP}{"\n"}')
```

get service name

```
K8_SERVICE_NAME=$(kubectl get svc -o jsonpath='{.items[0].metadata.name}{"\n"}')
```

get port number

```
K8_PORT=$(kubectl get svc -o jsonpath='{.items[0].spec.ports[0].port}{"\n"}')
```

get pod name

```
K8_POD_NAME=$(kubectl get --no-headers=true pods -o name | awk -F "/" '{print $2}')
```

test connection via cluster IP

```
k exec $K8_POD_NAME -- curl -s $K8_CLUSTER_IP:$K8_PORT
```

test connection via the service name and hit healthcheck

```
k exec $K8_POD_NAME -- curl -s $K8_SERVICE_NAME:$K8_PORT -- curl -s  $K8_SERVICE_NAME:$K8_PORT/healthcheck
```


<h1> demo using service NodePort </h1>


edit the existing `service-demo.ymal` file, changing the type to `NodePort`

```
kubectl edit svc k8-lab-demo-service
```

confirm type is now NodePort and grab the PORT(S) value

```
k get svc k8-lab-demo-service
```

go to youur browser and hit `localhost:<nodePort>`

```
curl 127.0.0.1:<nodePort>
```

go to youur browser and hit `<INTERNAL-IP>:<nodePort>`


<h1> demo using service LoadBalancer </h1>


again edit the existing `service-demo.ymal` file, changing the type to `LoadBalancer`

```
kubectl edit svc k8-lab-demo-service
```

confirm type is now LoadBalancer and grab the `PORT(S)` values

```
k get svc k8-lab-demo-service
```

go to youur browser and hit `127.0.0.1:<service port>`
