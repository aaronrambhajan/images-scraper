# image-downloader
This is a program written by Peter Evers that uses Nightmare to scrape Google images. **I altered it to make building large image databases incredibly simple.** I did this by adding scripts written in Bash and Python, and by making adjustments to Peter's JavaScript code to enable cmdline queries that automatically download images.
 
# Installation
```npm install images-scraper```

Note: You will need Node.js and Python3 installed to run this.

# Running
```./get_links.sh garbage can 34``` 

This will download *34* images for the query *garbage can*. However, you can choose to leave out the number of images downloaded, as follows from the next query:

```./get_links.sh garbage can```

This would default to downloading 10 images.

Additonally, you can chain queries in a shell script, as you'll see I've done in the file ```example.sh```. You can also directly manipulate advanced image parameters through ```example.js```.   
  

  
![alt text](https://i.imgur.com/Ld0hkU8.png)