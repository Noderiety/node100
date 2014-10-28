# Life Cyle Phases

1. Require: Startup phase 

	* When: process start to end of main tick
	* Before configure
	* Synchronous blocking IO
	* Load config data from file
	* Synchronous blocking constructors
		

2. Configure: Contruct all your objects phase

	* When: process start to end of main tick
	* Duration: process start to end of main tick
	* After configure
    * Construct objects from config data
    * No IO!

3. Initialization Phase

    * When: Post-construction, pre-request
    * Async IO only

4. General

    * When: Accepting requests
    * No sync IO


