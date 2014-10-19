# Life Cyle Phases

1. Require: Startup phase 

	* Duration: process start to end of main tick
	* Before configure
	* Sync blocking IO
	* Blocking is okay
	* *Sync okay
	* Load config data from file

1.b
	* Synchronous blocking IO construction

2. Configure: Contruct all your object phase

	* Duration: process start to end of main tick
	* After configure
  * Construct objects from config data
  * No IO!

3. Initialization Phase

  * Async IO
  * No sync IO

4. General

  * No sync IO


