package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import com.justrecommendme.mongo.DocumentAccess
import com.justrecommendme.model.Data

object Application extends Controller {

  def index = Action {

    Ok(views.html.index("Just Recommend Me!! -> "+ Data.data.keys));
  }

  
}