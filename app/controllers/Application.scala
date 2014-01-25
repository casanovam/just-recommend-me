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
  
  
  def index = Action {


    val activities = Data.getTop10Activities("Dublin", 2)
    
    Ok(views.html.index("activities-> "+ activities));
    
    
  }
  

  
  

  
  
  
}