#!/bin/bash

az account set -s 070bbfdf-7f1e-4ed8-89bc-8f025a1e9cfa
groups=$(az group list --query "[?!contains(name, 'vt') && !contains(name, 'cloud') ].name" -o tsv)

for name in $groups 
do 
    echo Going to delete: $name
	az group delete -n $name -y --no-wait
    echo Deleted.
done
