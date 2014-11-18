#Noderiety Node 100

##URL
[https://github.com/Noderiety/node100/](https://github.com/Noderiety/node100/)

##IRC
\#noderiety on freenode.net

##Schedule

* 09:30: [Intro to node.js, callbacks and non-blocking IO](https://github.com/Noderiety/node100/blob/master/Intro_EventEmitter_Modules.pdf?raw=true)
* 10:00: [EventEmitter](https://github.com/Noderiety/node100/blob/master/Intro_EventEmitter_Modules.pdf?raw=true)
* **10:30: Break**
* 10:45: [require, module, node_modules, npm, package.json](https://github.com/Noderiety/node100/blob/master/Intro_EventEmitter_Modules.pdf?raw=true)
* 11:15: [Debugging with node-inspector](https://github.com/node-inspector/node-inspector) ([On IntelliJ](http://www.jetbrains.com/idea/webhelp/running-and-debugging-node-js.html))
* 11:30: Error handling: `uncaughtException`, `throw`, callbacks, `try`/`catch` & [trycatch](https://github.com/CrabDude/trycatch)
* **11:45: Lunch**
* 12:45: [Core modules](http://nodejs.org/api/all.html): [path](http://nodejs.org/api/path.html), [querystring](http://nodejs.org/api/querystring.html), [utils](http://nodejs.org/api/util.html), [url](http://nodejs.org/api/url.html), [process](http://nodejs.org/api/process.html), [fs](http://nodejs.org/api/fs.html), [cluster](http://nodejs.org/api/cluster.html)
* 1:00p: []Common Module](http://eirikb.github.io/nipster/):  [request](https://github.com/mikeal/request), [lodash](lodash.com/docs)
* 1:15p: Workshops: 
  * [Learn You The Node.js For Much Win!](https://github.com/rvagg/learnyounode)
* 2:15p: Control-flow: Callbacks
* 2:30p: Control-flow: Promises
* 3:00p: Asynchrony Contracts: Callbacks and Promises A+
* **3:15p: Break**
* 3:30p: Control-flow: Async Generators
* 3:45p: Module Lifetime: Require, configure, initialize
* 4:00p: Workshops:
  * [Promise It Won't Hurt](https://github.com/stevekane/promise-it-wont-hurt)
* 5:00p: End

##Preparation
Install [nvm](https://github.com/creationix/nvm):

```
# Mac / Linux
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash

# Windows
npm install -g n
```

Install latest:

```
# Mac / Linux
nvm install v0.11 # Current version is >= 0.11.14

# Windows
n latest
```

Or, install stable:

```
# Mac / Linux
nvm install v0.10 # Current version is >= 0.10.32

# Windows
n stable
```

Set npm install directory:

```
# Mac / Linux
mkdir ~/.npmprefix
npm config set prefix ~/.npmprefix

# Windows
# Necessary?
```

and add to PATH:

```
# Mac
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile

# Linux
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Windows
# Necessary?
```

##Workshops
####Assigned workshops:
1. [Learn You The Node.js For Much Win!](http://nodeschool.io/#learn-you-node)
2. [Promise It Won't Hurt](https://github.com/stevekane/promise-it-wont-hurt)

Workshops can be run in 1 of 2 ways:

####Local executable:
```
$ npm install functional-javascript-workshop # UNNECESSARY, INCLUDED IN REPO
$ ./npm_exec functional-javascript-workshop
```
####Global install and executable:
```
$ npm install functional-javascript-workshop -g
$ functional-javascript-workshop
```

##Resources

[Node.js API](https://npmjs.org/doc/json.html)

[NPM](https://npmjs.org/)

[Nipster (NPM Search)](http://eirikb.github.io/nipster/)

[Runnable: Node.js](http://runnable.com/Node.js)