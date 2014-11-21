#' Plot 
#' 

plotcars <- function () {
		
 	dbhandle <- odbcDriverConnect('driver={SQL Server};server=SASA;database=sasa;trusted_connection=true')
	
	res <- sqlQuery(dbhandle, "SELECT x FROM parametre")
	plot(res)

	invisible();
}