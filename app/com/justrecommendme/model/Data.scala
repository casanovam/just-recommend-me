package com.justrecommendme.model


import com.justrecommendme.mongo.DocumentAccess
import scala.collection.mutable.HashMap
import com.mongodb.DBObject


object Data {

  
  val intMap = scala.collection.immutable.HashMap(0 -> 1, 2 -> 3)
  val CITY_TERM = "city" 
  val  data = {
    val allDocs = DocumentAccess.getAllDocs
    allDocs.toList.groupBy(o => o.get(CITY_TERM).toString()).foreach(o=> println(o._1 + " " + o._2.size))
    allDocs.toList.groupBy(o => o.get(CITY_TERM).toString())
  }

  def getCities : List[String] = data.keys.toList
  
  type CityPlanning = Map[String, List[DBObject]]
  
  def createData: CityPlanning = {
    val allDocs = DocumentAccess.getAllDocs
    allDocs.toList.groupBy(o => o.get(CITY_TERM).toString()).foreach(o=> println(o._1 + " " + o._2.size))
    allDocs.toList.groupBy(o => o.get(CITY_TERM).toString())
  }
  
  def printCities = {
    println("printCities method")
    data.keys.toList.foreach(println(_));
  }
  

  
  def clustering(list: List[(String, String)]) = ???
  
  
  
  
}