#!/bin/bash

NUMERO=$(ls $1 | wc -l)

if [ ! -d $1 ]
then
    echo "O argumento $1 não é um diretorio!"
else
    echo "O $1 tem $NUMERO arquivos"
fi