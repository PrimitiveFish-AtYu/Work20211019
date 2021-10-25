let F = true
let keyCode = 0
let MusicEnable =false
document.onkeydown=function(event)
{
    keyCode=0
    event.preventDefault()
    keyCode =event.which
}
document.onkeyup =function(event)
{
    keyCode=0
}
function SetMusicEnable(b){
    MusicEnable = b
}
function EventOnRightClick()
{
    if(keyCode!=17)
        return
    event.preventDefault()
    CardPicture = document.getElementById('CardPicture')
    ball_Size_Icon =document.getElementById('ball_Size_Icon')
    Bookmarks = document.getElementById('Bookmarks')
    PictureTitle = document.getElementById('PictureTitle')
    F=!F
    if(F) //Default
    {
        CardPicture.src='Img/Kaohsiung_Station.jpg'
        ball_Size_Icon.src='Img/ICON.png'
        Bookmarks.style.visibility='visible'
        PictureTitle.innerHTML='高雄火車站 Kaohsiung Station'
    }
    else
    {
        if(MusicEnable)
        {
            var myAudio = new Audio('music/gawr-gura-a.mp3');
            myAudio.play();
        }
        CardPicture.src='Img/GawrGrua.gif'
        ball_Size_Icon.src='Img/Bloop.jpg'
        Bookmarks.style.visibility='hidden'
        PictureTitle.innerHTML=''
    }

}