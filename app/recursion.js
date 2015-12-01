exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var returnFiles = [],
		dir;

	if (typeof dirName === 'string'){
	  	scanForDir(data, 'js');
	  	scanForFiles(dir);
	} else {
		scanForFiles(data);
	}

  	return returnFiles;

  	function scanForDir(data, dirName){
		if (typeof data !== "object"){
			return;
		}
		for (var prop in data){
			if (dir) break;
			if (data[prop].dir === dirName){
				dir = data[prop];
			} else {
				scanForDir(data[prop], dirName);
			}
		}
  	}

  	function scanForFiles(data){
  		if (typeof data.files.forEach === 'function'){
  			data.files.forEach(function(val){
  				if (typeof val === 'string'){
	  				returnFiles.push(val);
  				} else {
  					scanForFiles(val);
  				}
  			});
  		}
  	}
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
