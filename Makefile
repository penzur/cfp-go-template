.PHONY: dev
dev: build
	@echo "Running development server..."
	@echo
	@wrangler pages dev www \
		--live-reload \
		--port 9000 \
		--compatibility-date=2023-03-14 \
		--local

.PHONY: build
build:
	@rm -rf ./api.wasm
	#@tinygo build -o ./api.wasm -target wasm ./...
	GOOS=js GOARCH=wasm go build -o ./api.wasm  ./...

.PHONY: reload
reload: build
	@sleep 2
	@touch functions/_.js
	#@tinygo build -o ./api.wasm -target wasm ./...
	echo 'console.log(123)' >> functions/_.js
