package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import com.justrecommendme.mongo.DocumentAccess
import com.justrecommendme.model.Data
import com.justrecommendme.clustering.Point
import com.justrecommendme.model.Search
import java.util.Date

object Application extends Controller {

  val data = Data.data
  val CITY_PARAM_KEY = "city"
  val OK_RESPONSE = "OK"
  val n = 12;
  
  def index = Action {

    Ok(views.html.index(OK_RESPONSE))
  }
  
  
  def search = Action { request =>

    val searchInput = buildSearchInput(request);
    println("["+new Date()+ "] JRM search engine => "+searchInput)
    Data.cities.foreach(c => println(c))
    val activities = Data.getTopActivities(searchInput.city, n)  
    //activities.toList.foreach(a =>   println(a.get("name"))   )
    Ok(com.mongodb.util.JSON.serialize(activities.toList)); 
  }

  def buildSearchInput(request:  play.api.mvc.Request[play.api.mvc.AnyContent]): Search = {
   
    val city = request.getQueryString("city").getOrElse("")
    val dinner = request.getQueryString("dinner").getOrElse("")
    val pub = request.getQueryString("dinner").getOrElse("")
    val music = request.getQueryString("music").getOrElse("")
    val outside  = request.getQueryString("outside").getOrElse("")
    
    new Search(city, dinner.equals("true"), pub.equals("true"),
        music.equals("true"), outside.equals("true"))
    
  }
  

  
}