safeguards
==========

A collection node.js of best practices safeguards

## noSynchronousIO
Safeguards against require or "Sync" IO calls after main tick by replacing them with error throwing equivalents.
```javascript
// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
return require('safeguards').noSynchronousIO(module);
```
