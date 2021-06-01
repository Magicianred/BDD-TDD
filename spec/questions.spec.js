describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('Ce texte à une certaine taille');
        // on donne le reésultat attendu
        expect(result).toEqual(30);
    });

     it('Remplacer le premier e d\'une chaine par un espace', function () {
    //on crée un exemple
          var change= replaceE("ebonjour");
          // on donne le reésultat attendu
          expect(change).toContain(" ");
    });
    //
      it('Concatener deux chaines de caractères', function () {
    //on crée un exemple
       var conct= concatString("Bonjour","Faiza");
       // on donne le reésultat attendu
       expect(conct).toContain("Bonjour Faiza");
       });
    //
    it('Afficher le cinquième caractère d\'une chaine', function () {
    //on crée un exemple
    var show = showTheFifthLetter("Bonjour tous le monde");
        // on donne le reésultat attendu
        expect(show).toBeTruthy();
     });
    //
     it('Afficher les 9 premiers caractères dune chaîne de caractère', function () {
    //on crée un exemple
    var chaine=showFirstNineLetter("J'aime le javascript");
       // on donne le reésultat attendu
       expect(chaine).toBeTruthy();
     });
    //
     it('Mettre en majuscule la chaine', function () {
    //on crée un exemple
    var maj=changeToUper("hello world");
        // on donne le reésultat attendu
        expect(maj).toBeTruthy();

     });
    //
     it('Mettre en minuscule la chaine', function () {
    //on crée un exemple
        var min= changeToLower("HELLO WORLD");
         // on donne le reésultat attendu
         expect(min).toBeTruthy();
     });
    it('Supprimer les espaces avant et après la chaine', function () {
    //on crée un exemple
    var space= deletSpace("            j'aime JavaScript          ");
     // on donne le reésultat attendu
       expect(space).toBeTruthy();
    });
     it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
    //on crée un exemple
       var type=  getBoolean("j'aime le Javascript");
       // on donne le reésultat attendu
       expect(type).toBeTrue();
     });
    it('Afficher l\'extension du fichier', function () {
    //on crée un exemple
    var extention = showExtenct("image.jpg");
     // on donne le reésultat attendu
     expect(extention).toBeTruthy();
     });
    it('Compter le nombre d\'espace dans la chaine', function () {
    //on crée un exemple
    var nombre= countSpace("j'aime PHP");
     // on donne le reésultat attendu
     expect(nombre).toBeTruthy();
     });
     it('Inverser une chaine de caractères', function () {
    //on crée un exemple
    var inverse= reverseString("je m'appelle Faiza");
    // on donne le reésultat attendu
    expect (inverse).toBeTruthy();
     });
})
