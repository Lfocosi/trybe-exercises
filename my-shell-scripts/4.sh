#!/bin/bash

read DIR

if [ ! -e $DIR ]
then 
    echo "O caminho $DIR não está habilitado!"
else
    echo "O caminho $DIR está habilitado!"
    if [ -w $DIR ]
    then
        echo "Você tem permissão para editar $DIR"
    else
        echo "Você NÃo foi autorizado a editar $DIR"
    fi 
fi 