# Cloudflare pages template for Golang.

I use this personally for building MVPs and JAMstack projects.

### Quick Setup

    - Clone the repo

    - Run `go mod init <module name>`, and then `go mod tidy`

    - Run `make dev` to start the wrangler pages local server

### Development

**Static\***

The **`www/`** folder will be the entry point for static files. You can
still create a `react` project inside this folder and just make sure
that you set **`www/`** as the build target.

**Workers/Functions**

The `main.go` will be the entry point for all the your back-end code.

### Resources

    - [Cloudflare Pages](https://pages.cloudflare.com/)
    - [Golang](https://go.dev)
