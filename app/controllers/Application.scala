package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import com.justrecommendme.mongo.DocumentAccess
import com.justrecommendme.model.Data

object Application extends Controller {

  val data = Data.data
  
  
  def index = Action {

    Data.getCities.foreach(c => println("city=>: " + c))
    playing
    Ok(views.html.index("Just Recommend Me!! -> "+ Data.data.keys));
  }
  
  def playing = {
		  
    val plannnings = Data.getPlanningsFor("Dublin")
	plannnings.foreach(p => println(p))
		  

  }
  
  
 

}