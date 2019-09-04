// #!/usr/bin/env node
// modified from https://www.custardbelly.com/blog/blog-posts/2014/01/29/cucumberjs-build/index.html

var watch = require('node-watch')
var childProcess = require('child_process')
var running = false

var JS_EXT = /^.*\.js/i
var FEATURE_EXT = /^.*\.feature/i
var options = ['test']

const runTest = function (evt, filename) {
  if (!running && (filename.match(JS_EXT) || filename.match(FEATURE_EXT))) {
    running = true

    childProcess.spawn('npm', options, { stdio: [process.stdin, process.stderr] })
      .on('exit', function () {
        running = false
      })
  }
}

watch(['./cart.js', './features'], { recursive: true }, runTest)

console.log('Running initial test')
runTest(undefined, 'cart.js')
