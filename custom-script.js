// Entry point for the notebook bundle containing custom model definitions.
/* global define */
define(function() {
    'use strict';
  
    window['requirejs'].config({
      map: {
        '*': {
          '@quantum/ibm-q-lab-widgets': 'customized_script_widget'
        }
      }
    });
    // Export the required load_ipython_extension function
    return {
      load_ipython_extension: function() {}
    };
  });
  