#!/bin/bash

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