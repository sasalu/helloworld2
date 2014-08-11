#' Plot cars
#' 

plotcars <- function () {
		
 	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	
	res <- dbSendQuery(con, "SELECT a FROM parametre WHERE a>80")
	data = fetch(res, n=-1)
	plot(data)

	invisible();
}