// function(exports, require, module) {

// historiquement = variable globale
// peut se désactiver avec le mode strict (ES5)
// avec les mots clés import ou export, on est mode strict
// 'use strict';

// !!! A NE PLUS UTILISER
globalVar = 'globalVar';
console.log(globalVar);

if (true) {
  // !!! NE PLUS UTILISER var
  var localeFonction = 'localeFonction';
}

console.log(localeFonction);

if (true) {
  let localeBloc = 'localeBloc';
  const constLocaleBloc = 'constLocaleBloc';
  console.log(localeBloc);
  console.log(constLocaleBloc);
}

// }
