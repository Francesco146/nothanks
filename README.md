# No Thanks

A fork of "No Hello".

## Getting Started

It's a JavaScript site, so you'll need `node` installed. Using [nvm](https://github.com/nvm-sh/nvm) will make sure you're using the right version.

```sh
# git clone, etc
yarn        # install dependencies
yarn serve  # run development server
```

Then open [localhost:8123](http://localhost:8123/) in your browser, and you should be ready to disco.

### Making Changes

Unit tests are via Mocha. Nothing too fancy there.

We use UI tests via [Playwright](https://playwright.dev/). To ensure consistency, the snapshots are taken with a Linux container. To run this locally for convenience, you'll need two things installed: [Docker](https://docs.docker.com/desktop/mac/install/) and [act](https://github.com/nektos/act).

Available commands:

```sh
yarn check-snapshots  # do your snapshots match?
yarn update-snapshots # if not, update your snapshots!
```
