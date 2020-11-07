#!/bin/bash
function usage {
        echo "usage:"
        echo "run.sh -m [file path] -s [start room] -o [objects to collect]"
        echo ""
        echo "Example:"
        echo "run.sh -m ./map/map.json -s 2 -o Knife PottedPlant"
        echo ""
}

map=$2
start=$4
i=6;
j=$#;
objects=()
while [ $i -le $j ]  
do
    current=$6
    objects+=(" $current") 
    i=$((i + 1));
    shift 1;
done

node app.js -m $map -s $start -o ${objects[*]};