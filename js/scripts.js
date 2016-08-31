var inputTitle = $('#input-title');
var inputLink;
var read = '<td><button class="read-check" type="button" name="read">Read</td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';


$('#submit-button').prop('disabled', true);

function toggleSubmitButton () {
  if($('#input-title').val() != '' && $('#input-link').val() != '') {
    $('#submit-button').prop('disabled', false);
  } else {
    $('#submit-button').prop('disabled', true);
  }
};

$(inputTitle).keyup(function() {
  toggleSubmitButton();
});

$('#input-link').keyup(function() {
  toggleSubmitButton();
});

$('#submit-button').on('click', function() {
var inputTitle = $('#input-title').val();
var inputLink = $('#input-link').val();
    if (inputTitle === '' || inputLink === '') {
    alert('please enter valid title and url');
      } else {
        $('.link-list tr:last').after
        (`<tr><td>${inputTitle}
        </td><td><a href='https://${inputLink}'>${inputLink}</a>
        </td> ${read} ${remove}</tr>`);
    $('#input-title').val('');
    $('#input-link').val('');
  };
});

$('table').on('click', '.read-check', function () {
 $(this).parent().parent().toggleClass('read');
 // $(this).parent().parent().css('background', 'grey');
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
});



//make site responsive
//submit button disabled
//bookmark counter
