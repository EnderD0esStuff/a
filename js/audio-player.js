            window.addEventListener('DOMContentLoaded', () => {
                const audio = document.getElementById('music-audio');
                const musicButton = document.getElementById('musicButton')
                const muteIcon = 'images/svg/mute.svg'
                const unmuteIcon = 'images/svg/unmute.svg'

                if (!audio || !musicButton) {
                    console.log("bro really? ur audio is missing dummy")
                    return;
                }

                musicButton.addEventListener('click', () => {
                    audio.play().catch(error => console.log("idiot autoplay got blocked dummy"))


                    audio.currentTime = 0;

                    if (audio.muted) {
                        audio.muted = false;
                        musicButton.src = unmuteIcon;
                        musicButton.alt = 'unmuted';
                    } else {
                        audio.muted = true;
                        musicButton.src = muteIcon;
                        musicButton.alt = 'Muted';
                    }

                });
            });