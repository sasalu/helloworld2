#' Upload cars
#' 

uploadcars <- function () {
		
	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	ach <- dbSendQuery(con, "INSERT INTO teplota (idteplota) VALUES (4)")

}