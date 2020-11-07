#!/bin/bash

map=$2
start=$4
i=6;
j=$#;
objects=()
while [ $i -le $j ]  
do
    current=$6
    echo "Object - $i: $current";
    objects+=(" $current") 
    i=$((i + 1));
    shift 1;
done

node app.js -m $map -s $start -o ${objects[*]};