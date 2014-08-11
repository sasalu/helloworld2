#' Upload cars
#' 

uploadcars <- function () {
	
	x <- read.csv(file="C:/Users/Alexandra/Documents/GitHub/helloworld2/cars.csv", header = FALSE)
	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	
	dbWriteTable(con, "teplota", x) 
	#'ach <- dbSendQuery(con, "INSERT INTO teplota (idteplota) VALUES (7)")

}