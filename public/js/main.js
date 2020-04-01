const myVM = (() => {
    let navLink             = document.querySelectorAll('.navLink'),
        playPauseBtn        = document.querySelectorAll('.playPause'),
        stopBtn             = document.querySelectorAll('.stop'),
        rwdBtn              = document.querySelectorAll('.rwd'),
        fwdBtn              = document.querySelectorAll('.fwd'),
        volUpBtn            = document.querySelectorAll('.volUp'),
        volDownBtn          = document.querySelectorAll('.volDown'),
        ccBtn               = document.querySelectorAll('.cc'),
        playTime            = document.querySelectorAll('.currentTime'),
        transcriptBtn       = document.querySelectorAll('.transcriptBtn'),
        transcriptBtnText   = document.querySelectorAll('.transcriptBtnText'),
        transcript          = document.querySelectorAll('.transcript'),
        shownMedia          = document.querySelectorAll('.shownMedia');

    // Determines which button/media player to target
    let target = 0;

    // Shows selected media
    function showMedia(media) {
        // Hide any shown media
        let allMedia = document.querySelectorAll('.media');
        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].classList.add('hidden');
        }

        // Removes controls from media player
        for (let i = 0; i < shownMedia.length; i++) {
            shownMedia[i].removeAttribute('controls');
        }
        
        // Shows selected media
        let selectedMedia = document.querySelector('#content' + media.id);
        selectedMedia.classList.remove('hidden');

        // Hides closed captioning button for Music
        let ccBtn3 = document.querySelector('#cc3');
        ccBtn3.classList.add('hidden');
    }

    // Fetches the info from the database
    function getMedia(event) {
        event.preventDefault();

        let url = `/media/${this.getAttribute('href')}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                showMedia(data);
            })
            .catch((err) => console.log(err));
    }

    // Plays/pauses media on button press
    function playPause() {
        target = this.classList[1] - 1;

        if(shownMedia[target].paused) {
            shownMedia[target].play();
            playPauseBtn[target].textContent = 'Pause';
        } else {
            shownMedia[target].pause();
            playPauseBtn[target].textContent = 'Play';
        }
    }

    // Stops media on button press
    function stopMedia() {
        target = this.classList[1] - 1;
        
        shownMedia[target].pause();
        shownMedia[target].currentTime = 0;
        playPauseBtn[target].textContent = 'Play';
    }

    // Rewinds 5 seconds on button press
    function rewind() {
        target = this.classList[1] - 1;

        shownMedia[target].currentTime -= 5;
    }

    // Fast-forwards 5 seconds on button press
    function fastForward() {
        target = this.classList[1] - 1;

        shownMedia[target].currentTime += 5;

        if(shownMedia[target].currentTime >= shownMedia[target].duration) {
            shownMedia[target].pause();
            shownMedia[target].currentTime = 0;
            playPauseBtn[target].textContent = 'Play';
        }
    }

    // Turns volume down 5% on button press
    function volumeDown() {
        target = this.classList[1] - 1;

        if(shownMedia[target].volume >= 0.05) {
            shownMedia[target].volume -= 0.05;
        } else {
            shownMedia[target].volume = 0;
        }
    }

    // Turns volume up 5% on button press
    function volumeUp() {
        target = this.classList[1] - 1;

        if(shownMedia[target].volume <= 0.95) {
            shownMedia[target].volume += 0.05;
        } else {
            shownMedia[target].volume = 1;
        }
    }

    // Toggles captions on button press
    function captionToggle() {
        target = this.classList[1] - 1;

        if(shownMedia[target].textTracks[0].mode == 'showing') {
            shownMedia[target].textTracks[0].mode = 'hidden';
        } else {
            shownMedia[target].textTracks[0].mode = 'showing';
        }
    }

    // Toggles transcript on button press
    function transcriptToggle() {
        target = this.classList[1] - 1;

        if(transcript[target].classList.contains('hidden')){
            transcript[target].classList.remove('hidden');
            transcriptBtnText[target].textContent = 'Hide';
        } else {
            transcript[target].classList.add('hidden');
            transcriptBtnText[target].textContent = 'Show';
        }
        
    }

    // Updates time
    function updateTime() {
        target = this.classList[1] - 1;
        // console.log(this);

        let minutes = Math.floor(shownMedia[target].currentTime / 60);
        let seconds = Math.floor(shownMedia[target].currentTime - minutes * 60);
        let minuteValue;
        let secondValue;
      
          minuteValue = minutes;
      
        if (seconds < 10) {
          secondValue = "0" + seconds;
        } else {
          secondValue = seconds;
        }
      
        let mediaTime = minuteValue + ":" + secondValue;
        playTime[target].textContent = mediaTime;
    }

    // Adds event listeners to nav links
    navLink.forEach(navLink=> navLink.addEventListener('click', getMedia));

    // Adds event listeners to control buttons
    playPauseBtn.forEach(playPauseBtn=> playPauseBtn.addEventListener('click', playPause));
    stopBtn.forEach(stopBtn=> stopBtn.addEventListener('click', stopMedia));
    rwdBtn.forEach(rwdBtn=> rwdBtn.addEventListener('click', rewind));
    fwdBtn.forEach(fwdBtn=> fwdBtn.addEventListener('click', fastForward));
    volDownBtn.forEach(volDownBtn=> volDownBtn.addEventListener('click', volumeDown));
    volUpBtn.forEach(volUpBtn=> volUpBtn.addEventListener('click', volumeUp));
    ccBtn.forEach(ccBtn=> ccBtn.addEventListener('click', captionToggle));
    transcriptBtn.forEach(transcriptBtn=> transcriptBtn.addEventListener('click', transcriptToggle));

    // Adds event listener to end of media
    shownMedia.forEach(shownMedia=> shownMedia.addEventListener('ended', stopMedia));
    shownMedia.forEach(shownMedia=> shownMedia.addEventListener('timeupdate', updateTime));
})();