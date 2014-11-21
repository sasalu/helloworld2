#' Plot 
#' 

plotcars <- function () {
		
 	dbhandle <- odbcDriverConnect('driver={SQL Server};server=SASA;database=sasa;trusted_connection=true')
	
	res <- dbSendQuery(dbhandle, "SELECT x FROM parametre")
	data = fetch(res, n=-1)
	plot(data)

	invisible();
}