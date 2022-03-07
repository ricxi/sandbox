package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	token, err := getToken()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(token)
	
	// resp, err := http.Get("https://api.github.com/users")
	// if err != nil {
	// 	fmt.Println(err)
	// }
	// defer resp.Body.Close()
	
	// respBody, err := ioutil.ReadAll(resp.Body)
	
	// fmt.Print(string(respBody))
}

// maybe I should be returning a string and an error
func getToken() (string, error) {
	token, ok := os.LookupEnv("GITHUB_TOKEN")
	if !ok {
		fmt.Println("Token not found")
		return "", fmt.Errorf("ERROR: unable to find token")
	}
	return token, nil
}