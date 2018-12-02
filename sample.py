from pymongo import MongoClient;
from bson.objectid import ObjectId
import datetime

class Trash:
    def __init__(self):        
        self.mongo_url = "mongodb://arihantsaiparuchuru:Arihant123@ds041157.mlab.com:41157/trash-capacity-notifier"
        self.mongo_db = "trash-capacity-notifier"
        self.mongo_db_collection = "TrashCapacity"
        self.bin_id = "5bfeef7033a5340fd7215b7a"
        self.client = MongoClient(self.mongo_url)
        self.db = self.client[self.mongo_db]
        self.collection = self.db[self.mongo_db_collection]

    def updateBin(self,height): 
        now = datetime.datetime.now().isoformat().split(".")[0]
        d={"height":height,"timestamp":now}
        try:
            self.collection.update_one({"_id":ObjectId(self.bin_id)},{ "$addToSet": { "capacity": d } })
        except:
            with open("bin.log","a+") as f:
                f.write("Connection Error on : "+now+" | "+str(d)+"\n")
""""
new_data = [
    {"location":"MLK Floor 1","max_height":"200","capacity":[]},
    {"location":"MLK Floor 2","max_height":"200","capacity":[]}
]
"""
"""
bin = Trash()
for i in range(300,320):
    bin.updateBin(i)
"""