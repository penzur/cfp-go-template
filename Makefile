.PHONY: serve
serve: build
	@wrangler pages dev www \
		--port 9000 \
		--compatibility-date=2023-03-14 \
		--local

.PHONY: build
build:
	@killall node
	@sleep 2
	@rm -rf ./api.wasm
	#@tinygo build -o ./api.wasm -target wasm ./...
	GOOS=js GOARCH=wasm go build -o ./api.wasm  ./...

.PHONY: dev
dev:
	@air --build.cmd "make serve"
