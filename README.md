# cosplayer_evaluation

The purpose of this web application is for the organization to be able to register cosplayers for our competitions and allow the jury to easily vote on the competitors.

Once this is more fleshed out there will be a proper documentation of it's features and how to use them.

## Getting started

First you need the following to be able to use the project:
1. [`yarn`](https://yarnpkg.com/) for package management;
2. [`nim`](https://github.com/dom96/choosenim) to run the [back-end].

Once those two are installed all you have to do is to clone the [back-end], build it by following it's instructions and copying `api.cfg` and the binary `cosplayeval_back` into the root of this project. The default location we decided for the data for back-end use is in `./public/data`.

With that done, you can run `yarn` to install all dependencies and choose to either:
1. `yarn dev` to run with server-side rendering or
2. `yarn build` to transpile and minify for production use.

[back-end]: https://github.com/animegakuen/cosplayeval_back
