import csv
import random

with open('trash-data-melbourne-grouped-2.csv', 'w') as csvfile:
    fieldnames = ['Row ID', 'Date','Fills','Latitude','Longitude']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    
    trash_csv=open("trash-data-melbourne-grouped-1.csv","r")
    csv_reader = csv.DictReader(trash_csv)
    
    fills = [0,1,2,3,4]
    latitude = ["-37.802","-37.801"]
    longitude = ["145.042","145.013"]
    
    
    l=[]
    for row in csv_reader:        
        level=fills[random.randint(0,3)]
        date = row["Date"]
        dd,mm,yyyy = date.split("/")
        s= yyyy+"/"+mm+"/"+dd
        d={'Date':s,'Fills':level,'Latitude':'-37.802','Longitude':'145.042'}
        #writer.writerow(d)
        l.append(d)
        
    
    new_list = sorted(l,key=lambda k:k['Date'])
    for index,row in enumerate(new_list):
        d={'Row ID':index+1,'Date':row['Date'],'Fills':row['Fills'],'Latitude':row['Latitude'],'Longitude':row['Longitude']}
        writer.writerow(d)
        

    """
    for row in csv_reader:
    	if line_count==0:
    		line_count += 1
    		continue
    	else:'145.042'
    		level=fills[random.randint(0,3)]
    		d={'Row ID':lineCount, 'Date':row["Order Date"],'Fills':level,'Latitude':'-37.802','Latitude':"145.042"}
    		writer.writerow(d)
    	 	line_count+=1
    print("Done")
    """

