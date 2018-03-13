$(function(){
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
      var $voicelist = $('#voices');

      if($voicelist.find('option').length == 0) {
        speechSynthesis.getVoices().forEach(function(voice, index) {
          var $option = $('<option>')
          .val(index)
          .html(voice.name + (voice.default ? ' (default)' :''));

          $voicelist.append($option);
        });

        $voicelist.material_select();
      }
    }

    $('#speak').click(function(){
      var text = "This is the apple"; //$('#message').val();
	  
      var msg = new SpeechSynthesisUtterance();
	  
      //var voices = window.speechSynthesis.getVoices();
      //msg.voice = voices[0]; //voices[$('#voices').val()];
	  //alert(text);
      msg.rate = 0.6; //$('#rate').val() / 10;
      msg.pitch = 5; //$('#pitch').val();
      msg.text = text;
	  

      msg.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };

      speechSynthesis.speak(msg);
    })
  } else {
    $('#modal1').openModal();
  }
});