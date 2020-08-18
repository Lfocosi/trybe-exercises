#!/bin/bash

read DIR

if [ -d $DIR ]
then
    echo "é um diretorio"
    ls -la
elif [ -f $DIR ]
then
    echo "é um arquivo normal"
    ls -la
elif [ -e $DIR ]
then
    echo "é um outro tipo de arquivo"
    ls -la
else
    echo "não encontrado"
fi