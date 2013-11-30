import scala.io.Source

object LocalKMeans {
  def main(args: Array[String]) {

    val points = generateListOfPoints(100)
    val resultCentroids = kmeans(points, numClastersFor(points), 0.1)

    println("Final centroids: ")
    println(resultCentroids.map(centroid => "%3f\t%3f\n".format(centroid.x, centroid.y)).mkString)
  }
  
  def generateListOfPoints(n: Int): List[Point] = {
    
    if(n <= 1) List(Point.random)
    else Point.random::generateListOfPoints(n - 1)
  }

  def numClastersFor(points: List[Point]): Int = 4
  
  def kmeans(points: Seq[Point], n: Int, epsilon: Double): Seq[Point] = {
    
    def kmeansR(points: Seq[Point], n: Int, epsilon: Double) = ???
    
    
    val centroids = Array.fill(n) { Point.random }
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

    System.err.println("Centroids changed by\n" +
            "\t   " + movement.map(d => "%3f".format(d)).mkString("(", ", ", ")") + "\n" +
            "\tto " + newCentroids.mkString("(", ", ", ")"))

    // Iterate if movement exceeds threshold
    if (movement.exists(_ > epsilon))
      kmeans(points, newCentroids, epsilon)
    else
      return newCentroids
  }
  
  def clusters(centroids: List[Point]) : List[List[Point]] = {
    
    ???
  }
  
}