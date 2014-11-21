#' Plot 
#' 

plotcars <- function () {
		
 	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	
	res <- dbSendQuery(con, "SELECT x FROM parametre")
	data = fetch(res, n=-1)
	plot(data)

	invisible();
}