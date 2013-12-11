package com.justrecommendme.clustering

import org.scalatest.FunSuite

import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner

import com.justrecommendme.clustering
import com.justrecommendme.model.Data


@RunWith(classOf[JUnitRunner])
class ClusterTest extends FunSuite {

  
   test("Cities is not a null object") {
    assert(Data.getCities != null)
  }
   
   
  
}