#' Upload cars
#' 

uploadcars <- function (file, header, sep) {
	
	x <- read.csv(file=file, header=header, sep=sep)
	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	del <- dbSendQuery(con, "DROP TABLE parametre")	
	#'add <- dbSendQuery(con, "CREATE DATABASE sasa")	
	dbWriteTable(con, "parametre", x) 
	#'ach <- dbSendQuery(con, "INSERT INTO teplota (idteplota) VALUES (7)")

}