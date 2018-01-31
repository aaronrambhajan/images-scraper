#!/usr/bin/env bash

# Demonstrates how to automate these queries.

# Plastic Bottle
./get_links.sh Plastic Bottle			# Will default to 10 images.
./get_links.sh Plastic Water Bottle 45			# Will download 45 images.

# Plastic Utensil
./get_links.sh Black Plastic Fork 25
./get_links.sh Black Plastic Spoon			# Will default to 10 images.
./get_links.sh Plastic Fork 3
./get_links.sh Plastic Spoon 50