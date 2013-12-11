name := "view"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache
)   

libraryDependencies += "org.mongodb" %% "casbah" % "2.6.3"  

libraryDependencies += "org.scalatest" %% "scalatest" % "1.9.1" % "test"

libraryDependencies += "junit" % "junit" % "4.10" % "test"

play.Project.playScalaSettings


