#!/bin/bash

cd $1
FOR=$(ls -l | wc -l)

for i in $FOR
do
    NOME=$(ls | find -name "*.$2" | head -$i | tail -1)
    DATA=$(date -r $NOME)
    mv "$NOME" "$DATA-$NAME"
done