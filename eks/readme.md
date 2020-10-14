# Simple steps
- Create cluster (using eks create cluster)
- Create Fargate or EC2 profile 
    - eksctl create fargateprofile --cluster <cluster_name> --name <fargate_profile_name> --namespace <kubernetes_namespace> --labels <key=value>
- Create k8s namespace to match your Fargate namespace
    - kubectl create namespace dev-ns
- Create Replication controllers and nodes
- Create Pods
- Deploy Containers
- Create peering connections, routes and configure SGs

# Manage resources pods and containers
https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

``` sh
kubectl create deployment nginx --image=nginx 
kubectl apply -f nginx.yml
eksctl get fargateprofile --cluster demo-eks-cluster --region eu-north-1  -o yaml

kubectl delete pod --namespace default --all

aws eks describe-cluster --name demo-eks-cluster --query cluster.resourcesVpcConfig.clusterSecurityGroupId
kubectl api-resources --namespaced=true


kubectl get nodes -o wide --all-namespaces
kubectl get pods -o wide --all-namespaces # pods are essential ressources for k8s
kubectl get rc -o wide --all-namespaces
kubectl get deployments --all-namespaces
kubectl get service --all-namespaces
kubectl delete pod --namespace dev-ns --all
kubectl delete rc --namespace dev-ns --all
kubectl delete deployments --namespace dev-ns --all
```

# Good links
https://kubernetes.io/docs/reference/kubectl/cheatsheet/
https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/
https://www.digitalocean.com/community/tutorials/how-to-inspect-kubernetes-networking#getting-started