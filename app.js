const API_KEY = 'AIzaSyAMQCP3fOKVC7tTVXvroKIZldlEWk3n-1U';

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',  
        
    });
}

function loadYouTubeAPI() {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
}

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}

