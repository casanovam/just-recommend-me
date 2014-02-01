package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import com.justrecommendme.mongo.DocumentAccess
import com.justrecommendme.model.Data
import com.justrecommendme.clustering.Point
import com.mongodb.util.JSON
import com.mongodb.util.JSON

object Application extends Controller {

  val data = Data.data
  val CITY_PARAM_KEY = "city"
  val OK_RESPONSE = "OK"
  
  def index = Action {

    Ok(views.html.index(OK_RESPONSE))
  }
  
  def search = Action { request =>


    val city :  Option[String] = request.getQueryString("city")
    println("JRM search engine city: "+city.get)
    val activities = Data.getTopActivities(city.get, 10)    
    
    Ok(activities.toString);
  }

  def getParameterValue(parameters :Map[String, String], key : String) = Some(parameters.get(key))
   
  
  
}