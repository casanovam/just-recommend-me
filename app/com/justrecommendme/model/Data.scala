package com.justrecommendme.model


import com.justrecommendme.mongo.DocumentAccess
import scala.collection.mutable.HashMap

object Data {

  
  val  data = createData()
  
  def createData() = {
	  
    
    val allDocs = DocumentAccess.getAllDocs
    allDocs.toList.groupBy(o => o.get("city")).foreach(o=> println(o._1))
    
    allDocs.toList.groupBy(o => o.get("city"))

  }
  
  def clustering(list: List[(String, String)]) = ???
  
  
  
  
}