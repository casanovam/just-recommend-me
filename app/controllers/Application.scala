package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._

object Application extends Controller {

  def index = Action {
    
    
	  val uri = MongoClientURI("mongodb://JRMReader:Vi121013Mi.*@ds051658.mongolab.com:51658/justrecommendme");
	  val mongoClient= MongoClient(uri);
	  val db = mongoClient("justrecommendme");
	  val coll= db("Test");
	  val allDocs= coll.find();
	  for (doc <- allDocs)
 		println(doc);
    
    
    
    
    Ok(views.html.index("TESTING by Vicente!"))
  }

}