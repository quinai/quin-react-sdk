const Logger = {
  enableLogging: false,

  setConfig: function(enableLogging){
    this.enableLogging = enableLogging;
  },

  log: function(msg){
    if(this.enableLogging){
      console.log('[Quin SDK] ${msg}');
    }
  }

};