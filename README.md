# images-scraper
This is a program written by Peter Evers that uses Nightmare to scrape Google images. I altered it to make building large image databases incredibly simple. I did this by adding scripts written in Bash and Python, and made adjustments to Peter's JavaScript code to enable cmdline queries that automatically download images.
 
# Installation
```npm install images-scraper```

# Running
```./get_links.sh garbage can```
This will download images for the query "garbage can", and seen in the image below. You can chain queries in a shell script, as you'll see I've done in the file ```example.sh```. I have not yet enabled a cmdline parameter to change the number of images downloaded, though that can be directly manipulated through ```example.js```. 
![alt text](https://imgur.com/a/foCDF)