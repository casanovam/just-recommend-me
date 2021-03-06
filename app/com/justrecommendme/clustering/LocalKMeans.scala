package com.justrecommendme.clustering;


import scala.io.Source
import scala.collection.mutable.Map
import scala.util.Random

object LocalKMeans {
  
  type Cluster = Map[Point, List[Point]]
 
  def apply(points: List[Point]): Cluster = {
    
    println("number of clusters: "+numClastersFor(points))
    val centroids = kmeans(points, numClastersFor(points), 0.0000000000000000000000001)
    clusters(points, centroids.toList)
  }
  
  def generateListOfPoints(n: Int): List[Point] = {
    
    if(n <= 1) List(Point.random)
    else Point.random::generateListOfPoints(n - 1)
  }

  def numClastersFor(points: List[Point]): Int =  Math.sqrt((points.size)/2).toInt
 
  
  private def kmeans(points: Seq[Point], n: Int, epsilon: Double): Seq[Point] = {
    
	    def kmeansR(points: Seq[Point], centroids: Array[Point], epsilon: Double): Seq[Point] = {
	    // Assign points to centroids
	    val clusters = points.groupBy(KMeansHelper.closestCentroid(centroids, _))
	
	    // Recalculate centroids as the average of the points in their cluster
	    // (or leave them alone if they don't have any points in their cluster)
	    val newCentroids = centroids.map(oldCentroid => {
	      clusters.get(oldCentroid) match {
	        case Some(pointsInCluster) => pointsInCluster.reduceLeft(_ + _) / pointsInCluster.length
	        case None => oldCentroid
	      }})
	
	    // Calculate the centroid movement for the stopping condition
	    val movement = (centroids zip newCentroids).map({ case (a, b) => a distance b })
	
	   // System.err.println("Centroids changed by\n" +
	     //       "\t   " + movement.map(d => "%3f".format(d)).mkString("(", ", ", ")") + "\n" +
	    //        "\tto " + newCentroids.mkString("(", ", ", ")"))
	
	    // Iterate if movement exceeds threshold
	    if (movement.exists(_ > epsilon))
	      kmeansR(points, newCentroids, epsilon)
	    else
	      return newCentroids
	  }
	  val random = new Random()
	  
	  val centroids = Array.fill(n) { 
	    	val index = random.nextInt(points.size)
	    	points(index)
	   }
	  kmeansR(points, centroids, epsilon)
  }
  
  
   
  private def clusters(points: List[Point], centroids: List[Point]) : Map[Point, List[Point]] = {
    
    var clusterMap = Map[Point, List[Point]]()
    
    centroids.foreach(c => clusterMap += (c -> List[Point]()) )
    val c = for{
      point <- points
      centroidClosest = centroids.map(c => (c, c.distance(point))).minBy(_._2)._1
      
    } clusterMap += (centroidClosest -> (point::clusterMap(centroidClosest)) )
    
    clusterMap
  }
  
  
  
  //To Delete
   def main(args: Array[String]) {

    val points = generateListOfPoints(100)
    val centroids = kmeans(points, numClastersFor(points), 0.1)
    val clusterMap2 = clusters(points, centroids.toList)
    val clusterMap = apply(points)
    println("Final centroids: ")
    println(centroids.map(centroid => "%3f\t%3f\n".format(centroid.x, centroid.y)).mkString)
    //println("clusterMap: "+clusterMap)
    
    clusterMap.foreach(e => println(e._1+"("+e._2.size+") -> "+e._2))
  }

}