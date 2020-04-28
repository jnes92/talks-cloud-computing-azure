#!/bin/bash

az account set -s e227d55e-6048-4b52-bcbc-123588ad6373
groups=$(az group list --query "[?!contains(name, 'bm') ].name" -o tsv)

for name in $groups 
do 
    echo Going to delete: $name
	az group delete -n $name -y
    echo Deleted.
done
