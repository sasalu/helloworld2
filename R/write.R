#' write text
#' 

write <- function () {
	
	con <- dbConnect(MySQL(), host="127.0.0.1", port= 3306, user="root", password = "sasa", dbname="sasa")
	sel <- dbSendQuery(con, "select column_name from information_schema.columns where table_name='parametre'")
	data2 = fetch(sel, n=-1)
	list(print(data2[3,1]))

}