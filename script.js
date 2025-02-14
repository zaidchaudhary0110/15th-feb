// script.js
function startSurvey() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
  }
  
  function checkName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name.toLowerCase() === 'sehar') {
      document.getElementById('step2').classList.add('hidden');
      document.getElementById('step3').classList.remove('hidden');
    } else {
      alert("Who are you? You better be runnin'! My girlfriend will find you and beat the shit out of you!");
    }
  }
  
  function sayYes() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
  }
  
  function sayNo() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('error').classList.remove('hidden');
  }