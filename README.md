# cfp-go-template

<img src="https://pages.cloudflare.com/resources/logo/logo.svg" width="100" /><img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" width="130" />

This is a template for creating Cloudflare Pages project and using `Go` for the edge functions/workers. It is based on [syumai's](https://github.com/syumai/worker-template-tinygo) `tinygo` worker template but adapted for Cloudflare Pages functions and using standard Go.

&nbsp;

### Quick setup
&nbsp; 

1. **Make sure you have the following installed**

   - [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

   - [Go](https://go.dev)

   - [NodeJS](https://nodejs.org)

   - [Air](https://github.com/cosmtrek/air)
   

2. **Grab a copy of this repo**

	`git clone github.com/penzur/cfp-go-template <project name>`

3. **Set up dev environment**

	- Create your own repo by running `rm -rf .git` and then `git init`. 

   - Run `go mod init <module name>` followed by `go mod tidy`.

   - Add project-related dotfiles such as `.editorconfig` etc.

   - Run `make dev` to start the live reload server.

&nbsp;   

### Development
&nbsp; 

**Static files**

Inside the `www/` folder are static assets that will be mounted and served when you start the local server. Make sure to set this folder as the build target for your client-side framework as well.
 
&nbsp;

**Backend**

The `functions/` directory is your js/ts workers' entry point. You most likely don't need to edit anything in this folder since it's been set up to route all non-static requests to the bundled `wasm` module.

The **`main.go`** should be the entry point to your back-end logic. And have the rest of your `go` code inside the **`src/`** folder.

	├── main.go
	├── src/

&nbsp;

### Deployment

Push your code to `GitHub` or `Gitlab` and follow the instruction link below on how to set up auto-deploy for your project.

[Check out the docs](https://developers.cloudflare.com/pages/get-started/)

&nbsp;

