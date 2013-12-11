package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import com.justrecommendme.mongo.DocumentAccess
import com.justrecommendme.model.Data

object Application extends Controller {

  
  
  def index = Action {

	println("data: "+Data.data)
    Data.data.keys.toList.foreach("city=>: " + _)
    println("before mapInt call: ")
    Data.intMap.keys.toList.foreach("mapint: " + _)
    playing
    
    Ok(views.html.index("Just Recommend Me!! -> "+ Data.data.keys));
  }
  
  def playing = {
    println("cities again: ")
    Data.getCities.foreach(println(_))
    Data.printCities

  }
  
  
 

}