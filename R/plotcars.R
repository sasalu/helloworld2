#' Plot cars
#' 

plotcars <- function () {
		
  drv = dbDriver('MySQL')
  con = dbConnect(drv,dbname='u590493722_sasa',user='sasa',pass='sasa12')

	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	res <- dbSendQuery(con, "SELECT * FROM teplota")
	data = fetch(res, n=-1)
	plot(data)

	invisible();
}