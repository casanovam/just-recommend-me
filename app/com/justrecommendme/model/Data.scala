package com.justrecommendme.model


import com.justrecommendme.mongo.DocumentAccess
import scala.collection.mutable.HashMap
import com.mongodb.DBObject


object Data {

  val CITY_TERM = "city" 
  val  data = createData

  def getCities : List[String] = data.keys.toList
  
  type CityPlanning = Map[String, List[DBObject]]
  
  def createData: CityPlanning = {
    
    val allDocs = DocumentAccess.getAllDocs
    allDocs.toList.groupBy(o => o.get(CITY_TERM).toString())
  }

  def clustering(list: List[(String, String)]) = ???
  
  
  def getPlanningsFor(city: String) = data.get(city)
  
  
}