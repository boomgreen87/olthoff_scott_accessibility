const myVM = (() => {
    let navLink = document.querySelectorAll(".navLink");

    // Shows selected media
    function showMedia(media) {
        // Hide any shown media
        let allMedia = document.querySelectorAll('.media');
        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].classList.add('hidden');
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

    navLink.forEach(navLink=> navLink.addEventListener('click', getMedia));
})();