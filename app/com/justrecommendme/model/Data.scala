package com.justrecommendme.model


import com.justrecommendme.mongo.DocumentAccess
import scala.collection.mutable.HashMap
import com.mongodb.casbah.Imports._
import com.justrecommendme.clustering.LocalKMeans
import com.justrecommendme.clustering.Point


object Data {
  
  type Cluster = LocalKMeans.Cluster
  type CityPlanning = Map[String, List[DBObject]]
  
  val CITY_TERM = "city" 
  val data = createData
  lazy val cities = getCities
  
  def getCities : List[String] = data.keys.toList
  
  
  
  private def createData: CityPlanning = {
    val activities = DocumentAccess.getActivities
    //println(activities.foreach(a => println("activity: "+a)))
    activities.toList.groupBy(o => o.get(CITY_TERM).toString())
  }

  private def clustering(locations: List[Point]) : Cluster = LocalKMeans.apply(locations)
  
  def getPlanningsFor(city: String) = data.get(city)
  
  def getLocations(activities: List[DBObject]): List[Point] = {
    
    val locs = activities.flatMap(a => List( new Point(asDoubleList(a, "location").head, asDoubleList(a, "location").tail.head)))
   
    val cluster = clustering(locs)
    println("========== CLUSTER =================")
    cluster.foreach(e => println(e._1+"("+e._2.size+") -> "))
    println
    println
    null
  }
  
  def clustering(){
   
    
    data.foreach(city =>  {
      
	      val l = Data.getLocations(city._2)
	    }
    )
  }
  
  private def asList[A](underlying: DBObject, key: String) = (List() ++ underlying(key).asInstanceOf[BasicDBList]) map { _.asInstanceOf[A] }

  private def asDoubleList(underlying: DBObject, key: String) = asList[Double](underlying, key)
  
  private def existCity(city: String): Boolean = cities.contains(city)
  
  def getTopActivities(city: String, n: Integer): List[DBObject] = {
    
	  if(existCity(city))
		  data.get(city).get.take(n)
	  else List()
	  
  }
  
  
  
  
  
}