#!/bin/bash

read -p "Are you sure you want to run this command? It will delete the 'dist,server,tmp' folders from the project root. (y/n) " answer

if [ "$answer" == "y" ]; then
    rm -rf dist
    rm -rf server
    rm -rf tmp
    cd ..
    echo "Command completed."
else
    echo "Command cancelled."
fi
