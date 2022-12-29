// array of options
var factions = [
  {name: 'Lyonar', crest: 'assets/lyonar-crest.png', icon: 'elements/STR12x.png'},
  {name: 'Songhai', crest: 'assets/songhia-crest.png', icon: 'elements/AGI12x.png'},
  {name: 'Vetruvian', crest: 'assets/vet-crest.png', icon: 'elements/WIS12x.png'},
  {name: 'Abyssian', crest: 'assets/abyss-crest.png', icon: 'elements/INT12x.png'},
  {name: 'Magmar', crest: 'assets/mag-crest.png', icon: 'elements/HRT12x.png'},
  {name: 'Vanar', crest: 'assets/van-crest.png', icon: 'elements/STR-AGI12x.png'}
]

function change() {
   imgElement.src = images[index];
   index > 4 ? index = 0 : index++;
   console.log(index);
}

function random() {
      setInterval(change, 125);
}

function choosePrism() {

        var result = factions[Math.floor(Math.random()*factions.length)];
      function displayResults() {
        $('.results').html(
          "<div class='faction-wrapper'><img class='crest' src='" + result.crest + "'/></div>"
          + '<h2 class="faction-name">' + result.name + '</h2>'
        );
        $('.hero').addClass('hero-ani');
        $('.crest').addClass('crest-shifted');
      }
      $('.faction-wrapper').addClass('border-ani');

    function showLoader() {
        $('.hero-wrapper').addClass('loader');
        $('.hero-name').addClass('loader');
      }
      //showLoader();
      setTimeout(displayResults, 2000);
  };
  $('.picker').on('click', function() {
    choosePrism();
})

  $('.fa-circle-info').on('click', function() {
    $('#info').fadeToggle(750);
})