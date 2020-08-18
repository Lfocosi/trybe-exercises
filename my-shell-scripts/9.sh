#!/bin/bash

LIMIT=$($1 wc -m)

if [ LIMIT -it "100" ]
then
    if [ -d $1 ]
    then
        echo "é um diretorio"
        ls -la
    elif [ -f $1 ]
    then
        echo "é um arquivo normal"
        ls -la
    elif [ -e $1 ]
    then
        echo "é um outro tipo de arquivo"
        ls -la
    else
        echo "não encontrado"
    fi
fi