#!/bin/bash

WATCHED_DIR="/home/ainelo23/Documents/React-Js-course"

inotifywait -m -r -e modify,create,delete,move "$WATCHED_DIR" | while read -r directory events filename; do
  cd "$WATCHED_DIR" || exit
  git add .
  git commit -m "Commit automatique : $events $filename"
  git push --set-upstream origin main
done

