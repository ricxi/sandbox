package main

import (
	"fmt"
	"log"
	"net/http"
)

const PORT = ":3333"

func main() {
	mux := http.NewServeMux()

	fmt.Printf("Server is starting on port %s ...\n", PORT)

	s := make(chan error)

	go func() {
		// sending nil into a channel blocks forever
		s <- http.ListenAndServe(PORT, mux)
	}()

	// receiving nil from a channel also blocks forever
	err := <-s

	// since it blocks forever, this line is never reached if the server is started successfully
	if err != nil {
		fmt.Println("Server did not started correctly")
		log.Fatal(err)
	} else {
		// This line can never be reached
		fmt.Println(err)
	}
}
