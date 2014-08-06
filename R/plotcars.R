#' Plot cars
#' 

plotcars <- function () {
		
	cars <- read.csv("~/GitHub/helloworld2/cars.txt", header=FALSE)
	
	plot(cars)  
	invisible();
}