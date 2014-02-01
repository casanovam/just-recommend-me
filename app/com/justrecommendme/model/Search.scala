package com.justrecommendme.model

class Search(_city: String, _dinner: Boolean, _pub : Boolean, _music : Boolean, _outside : Boolean) {

  val city = _city
  val dinner = _dinner
  val music = _music
  val outside = _outside
  val pub = _pub
  
  override
  def toString() = "{city: "+city+", dinner: "+dinner+", music: "+music+", outside: "+outside+", pub: "+pub+"}"
}
