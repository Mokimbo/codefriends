#!/bin/zsh
n=1
while ! mkdir "00$n"-test-line
do
    n=$((n+1))
done