Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		  
	  console.log("BABELE LOADED !!!");
	  Babele.get().register({
		  module: 'bid-fr',
		  lang: 'fr',
		  dir: 'compendiums'
	  });
	} else {
		console.log("****** Module BABELE non Activé !!! **********");
	}
  });
