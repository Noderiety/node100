#callback/errback contract
1. Function that takes 2 arguments
	* first argument is an error
	* second argument is the result
	* Never pass both
	* error should be instanceof Error
1. Must never excecute on the same tick of the event loop
2. Must be passed as last argument to function
3. Return value is ignored
4. Must not throw / must pass resulting errors
5. Must never be called more than once