package com.justrecommendme.mongo

import com.mongodb.casbah.Imports._

object DocumentAccess {
  
  val url = "mongodb://JRMReader:Vi121013Mi.*@ds051658.mongolab.com:51658/justrecommendme"
  val client = "justrecommendmejustrecommendme"
  val db = connection()
  
  def getActivities =  db("activity") find
  
  def getCities = db("city") find
  
  def getUsres = db("user") find
  
  
  
  def connection() = {
  
  	val uri = MongoClientURI(url);
	val mongoClient= MongoClient(uri);
	mongoClient("justrecommendme");
  }
  
  
  
}