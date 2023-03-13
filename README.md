# cfp-go-template

A template for creating CF Pages project with Go support for writing edge functions/workers.

### Quick setup

1. **Make sure you have the following installed**

    - Wrangler CLI

    - Go

2. **Git clone this repo**

3. **Set up dev environment**

    - Run `go mod init <mode name>` followed by `go mod tidy`.

    - Add project-related dotfiles such as `.editorconfig`.

    - Check out the `main.go` file and start coding!

    - To test out your code, run a local wrangler server using `make dev`
      > 
      > **Note**
      > 
      > You need to restart the server everytime you make changes.
