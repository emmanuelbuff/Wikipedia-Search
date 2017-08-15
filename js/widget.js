$(document).ready(function(){
    var searchResults = [];
    var html = '<div class="contained">';
    

  function search(){
      $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data){
        $('#results').empty();
        var returnedSearch = data.query.search;
    
          for (var result in returnedSearch) {

        html = '<div><a href="https://en.wikipedia.org/wiki/' + returnedSearch[result].title + '"target="_blank"><h3>' + returnedSearch[result].title + '</h3><p>' + returnedSearch[result].snippet + '</p></a><hr/></div>';

        // Displays the elements to the page
        $('#results').append(html);
      } 
    }   
  }); 
  }
   
$('#submit').click(function(){
    search();
})
  $('#search').keyup(function() {
    search();
  });    
})
    