#Control-flow Options


* Are you running latest node.js?
  * No: (A) Are you willing to learn functional programming?
  
     * No: Use stepup
     * Yes: Use songbird
     
  * Yes: Are you willing to use babel/a build system?
  
     * No: Are you willing to run node.js with flags?
     
         * No: See (A)
         * Yes: Use --harmony, songbird and Promise.coroutine(function*(){yield})
     
     * Yes: Use async/await
         