# cfp-go-template

A template for creating CF Pages project with Go support for writing edge functions.

> Derived from [syumai's](https://github.com/syumai/worker-template-tinygo) tinygo worker template,
but for cf pages/functions.

### Quick setup

1. **Make sure you have the following installed**

   - [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

   - [Go](https://go.dev)

   - [Air](https://github.com/cosmtrek/air) - live reload

2. **Git clone this repo**

3. **Set up dev environment**

   - Run `go mod init <mode name>` followed by `go mod tidy`.

   - Add project-related dotfiles such as `.editorconfig`.

   - Check out the `main.go` file and start coding!

   - Run `mak dev` to start the local server
