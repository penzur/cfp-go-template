# cfp-go-template

<img src="https://pages.cloudflare.com/resources/logo/logo.svg" width="100" />
<img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" width="130" />

A template for creating CF Pages project with Go support for writing edge functions.

> Derived from [syumai's](https://github.com/syumai/worker-template-tinygo) tinygo worker template,
but for cf pages/functions and using regular `go`.

&nbsp;
### Quick setup

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
### Dev time!

**THE CLIENT**

The `www/` folder will be mounted and served when you start the local server. So if you're using a bloatware of some sort (*\*cough React\**), make sure to set your build target to this folder. Otherwise, you're gonna have to change the target folder inside the `Makefile` `:serve` action.


**THE BACKEND**

The `functions/` folder is the entry point to your edge functions/workers. So whatever folders or javascript files you put in there will be [treated as a route](https://developers.cloudflare.com/pages/platform/functions/routing/).

Inside the `functions/` folder is a middleware that will route all requests that start with `/api` to the `wasm` binary. So make sure that all you `go` handlers' target path starts with `/api` like so:

```go

	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		json.
			NewEncoder(w).
			Encode(map[string]string{"message": "hello"})
	})
	

```
&nbsp;

### Deployment

> soon...