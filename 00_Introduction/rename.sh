#!/bin/zsh

local regExName="s/\(a\)\(.*\)\(.js\)/\2\3/"

for fileName in *; do
    local newName=`sed "$regExName" <<< "$fileName"`
    mv "$fileName" "$newName"
done
