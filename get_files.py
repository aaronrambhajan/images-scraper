import requests
import urllib
import os
from os.path import isfile, join
import sys

num = 1
query_vals = sys.argv
item = " ".join(query_vals[1:query_vals.index('[')]).strip()
for i in range(len(query_vals)):
    if query_vals[i][0] == "'":
        filename = item + "_" + str(num) + ".jpg"
        url = query_vals[i][1:-1]
        image_file = open(filename, 'wb')
        image_file.write(requests.get(url).content)
        image_file.close()
        num += 1
