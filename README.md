# cfp-go-template

<img src="https://pages.cloudflare.com/resources/logo/logo.svg" width="100" /><img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" width="130" />

This is a template for creating Cloudflare Pages project and implementing edge functions/workers using Go. It is based on [syumai's](https://github.com/syumai/worker-template-tinygo) tinygo worker template but adapted for Cloudflare Pages functions and using standard Go.

&nbsp;

### Quick setup
&nbsp; 

1. **Make sure you have the following installed**

   - [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

   - [Go](https://go.dev)

   - [Air](https://github.com/cosmtrek/air) - live reload

2. **Grab a copy of this repo**

	`git clone github.com/penzur/cfp-go-template <project name>`

3. **Set up dev environment**

	- Create your own repo by running `rm -rf .git` and then `git init`. 

   - Run `go mod init <module name>` followed by `go mod tidy`.

   - Add project-related dotfiles such as `.editorconfig` etc.

   - Run `mak dev` to start the live reload server.

&nbsp;   

### Develop
&nbsp; 

**THE CLIENT**

The `www/` folder will be mounted and served when you start the local server. So if you're using a bloatware of some sort (*\*cough React\**), make sure to set your build target to this folder. Otherwise, you're gonna have to change the target folder inside the `Makefile` `:serve` action.

&nbsp;

**THE BACKEND**

The `functions/` folder is the entry point to your edge functions/workers. So whatever folders or javascript files you put in there will be [treated as a route](https://developers.cloudflare.com/pages/platform/functions/routing/).

Inside the `functions/` folder is a middleware that will route all requests that start with `/api` to the `wasm` binary. So make sure that all your `go` handlers' path starts with `/api`.


```go
http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
	json.
	NewEncoder(w).
	Encode(map[string]string{"message": "hello"})
})
	
```
&nbsp;

### Deployment

[Check out the docs](https://developers.cloudflare.com/pages/get-started/)

&nbsp;

