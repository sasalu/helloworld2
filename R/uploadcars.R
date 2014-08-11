#' Upload cars
#' 

uploadcars <- function () {
	
	x <- read.csv(file="C:/Users/Alexandra/Documents/GitHub/helloworld2/pokus.csv", header = TRUE, sep=";")
	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	#'del <- dbSendQuery(con, "DROP DATABASE sasa")	
	#'add <- dbSendQuery(con, "CREATE DATABASE sasa")	
	dbWriteTable(con, "parametre", x) 
	#'ach <- dbSendQuery(con, "INSERT INTO teplota (idteplota) VALUES (7)")

}