console.log('Welcome to Spotify');
let songIndex = 0;
let audioSong = new Audio('./songs/1.mp3');
let playButton = document.getElementById('masterPlay');
let playNext = document.getElementById('next');
let playPrev = document.getElementById('previous');
let audioProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songList = Array.from(document.getElementsByClassName('songItem'));  //Array.from is used because foreach cant be used on an array coming from html it has to be converted


let songs= [
    {songName:'1', filePath:"songs/1.mp3", coverPath:'covers/1.jpg'},
    {songName:'2', filePath:"songs/2.mp3", coverPath:'covers/2.jpg'},
    {songName:'3', filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'4', filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'5', filePath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'6', filePath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName:'7', filePath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName:'8', filePath:'songs/8.mp3', coverPath:'covers/8.jpg'},
    {songName:'9', filePath:'songs/9.mp3', coverPath:'covers/9.jpg'},
    {songName:'10', filePath:'songs/10.mp3', coverPath:'covers/10.jpg'},
];


songList.forEach((element,i)=>{
    console.log('song list');
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

playButton.addEventListener("click", ()=>{
    if(audioSong.paused || audioSong.currentTime<=0){
        audioSong.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
        gif.style.opacity = 1; 
    }
    else{
        audioSong.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioSong.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress = parseInt((audioSong.currentTime/audioSong.duration)*100);
    audioProgressbar.value = progress;
});

audioProgressbar.addEventListener('change', ()=>{
    audioSong.currentTime = (audioProgressbar.value*audioSong.duration)/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
    
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioSong.src = `./songs/${index+1}.mp3`;
        audioSong.currentTime = 0;
        audioSong.play();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
        console.log(songs[index]);
        
    })
})

playNext.addEventListener('click', ()=>{
        if(songIndex<9){
            songIndex++;
        }
        else{
            songIndex = 0;
        }
        audioSong.src = `./songs/${index+1}.mp3`;
        audioSong.currentTime = 0;
        audioSong.play();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
})

playPrev.addEventListener('click', ()=>{
    if(songIndex=0){
        songIndex=0;
    }
    else{
        songIndex--;
    }
    audioSong.src = `./songs/${index+1}.mp3`;
    audioSong.currentTime = 0;
    audioSong.play();
    playButton.classList.remove('fa-pause-circle');
    playButton.classList.add('fa-play-circle');
})
