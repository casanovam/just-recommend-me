#!/usr/bin/python
#Declare libraries
import os
import sys
import json
import pymongo
import os


from pymongo import MongoClient


def printConfiguration(confData):
	"""
	Print all the configuration read from the configuration file
	
	Args:
		confData(json): Json object with all the configuration values
	
	"""
	print("The configuration used for the fileUploader will be:")
	print("\t Server:\t\t"+confData["server"])
	print("\t Port:\t\t"+confData["port"])
	print("\t Database:\t\t"+confData["database"])
	print("\t Collection:\t\t"+confData["collection"])
	print("\t User:\t\t"+confData["user"])
	print("\t Password:\t\t"+confData["password"])
	





def getConfiguration(file):
	"""	
	Open the configuration file and load it into a json object.
	The file must exist and the format must be a json file.
	
	Args:
		file(str): Path to the json file with the configuration information.
	
	Returns:
		Json: Json object with all the configuration information.
		
	"""
	try:
		confFile=open(file)		
		confData=json.load(confFile)
		printConfiguration(confData)
		return confData
	#If the file is not in the expect format, or is not found an exception is raised
	except Exception as e:
		print("Error using <<"+file+">> file, check file format, structure and location")
		pass





def getConnection(confData):
	"""	
	Creates a connection to MongoDB database using confData and returns the connection.
		
	Args:
	        confData: Json object with the configuration.
		
		Returns:
			db: Database connection to MongoDB.
			
	"""	
	client = MongoClient(confData["server"],int(confData["port"]))
	client.write_concern = {'w': 1, 'wtimeout': 1000}
	db = client[confData["database"]]
	db.authenticate(confData["user"],confData["password"])
	return db






def getCollection(db,collectionName):
	"""	
	Returns a link to the collection in MongoDB specified in collectionName.
			
	Args:
		db: Connection to MongoDB database.
			
		Returns:
			collection: Collection in database
				
	"""	
	
	
	collection = db[collectionName]
	return collection



def getFilePaths(path):
	"""	
	Iterates in a path, folder by folder (included all subfolders) and 
	returns two collections: activities collection with all the paths 
	to activities files and images collection with all the paths to images 
	files.
				
	Args:
		pat: Folder containing the files.
				
		Returns:
			activities: List of activities paths
			images: List of images paths
					
	"""		
	activities = []
	images = []
	
	
	#Iterate the folder and subfolders retrieving the paths to the files
	for subdir, dirs, files in os.walk(path):
		for file in files:
			filePath= os.path.join(subdir, file)
			if "json" in file:
				activities.append(filePath)
			else:
				images.append(filePath)	
		
	return activities,images
	
	
def getImage(path):
	"""	
	Open a image from path, encodes in base64 and returns it ready to
	be uploaded to MongoDB
					
	Args:
		pat: path to the image.
					
		Returns:
			image64: image encoded in base64
						
	"""		
	
	#Encode the image in base64 in shell and read plain text
	
	cmd = "head -c 10000000 "+path+" | base64 > "+ path+"BASE64"


	os.system(cmd)
	
	
	
	#Open the image
	image= open(path+"BASE64")
	imageFile = image.read()
	#Remove the endline
	imageCapped = imageFile[:-1]
	
	
	
	return imageCapped




def getJson(path):
	"""	
	Open a Json document from path and loads it into a Json object
	
						
	Args:
		pat: path to the Json Document.
						
		Returns:
			jsonObj: json Object in memory
							
	"""			
	try:
			
		
		jsonPath=open(path)		
		jsonData=json.load(jsonPath)
		return jsonData
	#If the file is not in the expect format, or is not found an exception is raised
	except Exception as e:
		print("Error opening <<"+path+">> file, check file format, structure and location")
			







def generateJsonCollection(activities,images):
	
	"""	
	Open a Json document from path and loads it into a Json object
							
	Args:
		pat: path to the Json Document.
							
	Returns:
		jsonObj: json Object in memory
								
	"""		
	
	jsonCollection = []
	activityPosition =0
	#Take default image and load it in memory
	for activityPath in activities:
		#Get the related image 
		imagePath=images[activityPosition]
		activityPosition=activityPosition+1
		
		image64= getImage(imagePath)
		try:
			jsonObj= getJson(activityPath)
			
			
				
			imageJson = {"type":"jpeg","content":image64}
				
			jsonObj['image']=imageJson
		
		
		
			jsonCollection.append(jsonObj)
			
		except Exception as e:
			print(e)
			pass	


	
	return jsonCollection




def uploadCollection(objectCollection, dbCollection):
	"""	
	Upload a collection of JsonObjects to the database
								
	Args:
		objectCollection. Collection with objects to upload
		dbCollection. Collection in the database to upload json objects
									
	"""	

	
	for jsonObject in objectCollection:
		dbCollection.insert(jsonObject)
		


def main():
	
	"""
		Main module of the fileUploader process.
		Take the first argument (which is the path to the configuration file),
		load the configuration information stored on it and upload the files located
		in the path specified in the second argument.
		
	"""


	try:
	
	
		#Get Parameters
		configurationFile = str(sys.argv[1])
		folder = str(sys.argv[2])		
	
		#Get configuration
		confData=getConfiguration(configurationFile)

		#Iterate the folder and subfolders retrieving the paths to the files		
		activities,images = getFilePaths(folder)		
		
						
        
		#Open any file and print it content
		#for activity in activities:
		#   activityFile = open(activity)
		#   jsonFile= json.load(activityFile)
		#   print json.dumps(jsonFile, indent=4, sort_keys= True)


		#Generate the list of JsonObjects to upload
		jsonObjects=generateJsonCollection(activities,images)


		#Connect to the database and get the collection

		db = getConnection(confData)
		colActivities=getCollection(db,confData["collection"])
		

		#print(colActivities)


		#Show one activity for testing purposes
		#test= colActivities.find_one()
		#print (test)
		
		#print(jsonObjects)
		
		
		uploadCollection(jsonObjects,colActivities)
		



	except IndexError:
		print "Use of script: fileUploader.py <configuration.Json> <path>"
		print "<configuration.JSon>: File with the configuration for running the process"
		print "<path> : Full path with all the files to upload to MongoDB"
	except pymongo.errors.ConnectionFailure: 
		print "Error in connection to MongoDB database"
	except pymongo.errors.ExecutionTimeout:
		print "Time out in the operation"


if __name__ == '__main__':
	main()



