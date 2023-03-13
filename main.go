// Package: main
package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/syumai/workers"
)

func main() {
	log.Println("Go WASM time!")
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.NotFound(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]string{"error": "not found"})
	}))
	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]string{"message": "ok"})
	})
	workers.Serve(r)
	select {}
}
