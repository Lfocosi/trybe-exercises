#!/bin/bash
FOR=$(ls -l | wc -l)

for i in $FOR
do
    NOME=$(ls | find -name "*.png" | head -$i | tail -1)
    DATA=$(date -r $NOME)
    mv "$NOME" "$DATA-$NAME"
done