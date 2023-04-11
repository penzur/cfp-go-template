.PHONY: serve
serve: api.wasm
	@wrangler pages dev www \
		--port 9000 \
		--compatibility-date=2023-03-14 \
		--local

api.wasm:
	@killall node > /dev/null
	@sleep 2
	GOOS=js GOARCH=wasm go build -o ./api.wasm  ./...

.PHONY: dev
dev:
	@air --build.cmd "make serve"
