#!/usr/bin/env bash
query="$*"
mkdir "$query"
node example.js "$query"  > ./"$query"/"$query".txt
mv ./get_files.py ./"$query"/
cd ./"$query"
python3 ./get_files.py $(cat ./"$query".txt)
cd ..
rm ./"$query"/"$query".txt
mv ./"$query"/get_files.py ./