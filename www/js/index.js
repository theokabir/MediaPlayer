document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log(Media)

    const furelise = "./../music/beethoven-fur-elise-piano-version.mp3"

    const fureliseMedia = new Media(furelise, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const moonlight = "./../music/beethoven-moonlight-sonata-3rd-movement.mp3"

    const moonlightMedia = new Media(moonlight, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const cuagain = "./../music/c-u-again-feat-mikk-mae-cartoon-vs-futuristik-vip-ncs-release.mp3"

    const cuagainMedia = new Media(cuagain, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const furretwalk = "./../music/furret-walk-with-lyrics-the-musical-the-experience-the-legend.mp3"

    const furretwalkMedia = new Media(furretwalk, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const sweetchildomine = "./../music/guns-n-roses-sweet-child-o-mine-official-music-video.mp3"

    const sweetchildomineMedia = new Media(sweetchildomine, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const hikarunara = "./../music/hikaru-nara-lyrics-englishtranslation.mp3"

    const hikarunaraMedia = new Media(hikarunara, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const aqualung = "./../music/jethro-tull-aqualung.mp3"

    const aqualungMedia = new Media(aqualung, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const peepingtom = "./../music/peeping-tom-feat-rosie-harte.mp3"

    const peepingtomMedia = new Media(peepingtom, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const darknecessities = "./../music/red-hot-chili-peppers-dark-necessities-official-video.mp3"

    const darknecessitiesMedia = new Media(darknecessities, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })

    const warriors = "./../music/warriors-ft-imagine-dragons-worlds-2014-league-of-legends.mp3"

    const warriorsMedia = new Media(warriors, ()=>{
        console.log("midia criada")
    }, (err)=>{
        console.log("erro ao criar midia: " + err )
    })


    var current = fureliseMedia;

    $(".pause").on("click", function(){
        if(current == null){
            console.log("nenhuma musica selecionada")
        }else{
            current.pause()
        }
    })

    $("#furelise").on("click", function(){
        verStop(fureliseMedia)
        current.play();
    })

    $("#moonlight").on("click", function(){
        verStop(moonlightMedia)
        current.play();
    })

    $("#cuagain").on("click", function(){
        verStop(cuagainMedia)
        current.play();
    })

    $("#furretwalk").on("click", function(){
        verStop(furretwalkMedia)
        current.play();
    })

    $("#sweetchild").on("click", function(){
        verStop(sweetchildomineMedia)
        current.play();
    })

    $("#hikarunara").on("click", function(){
        verStop(hikarunaraMedia)
        current.play();
    })

    $("#aqualung").on("click", function(){
        verStop(aqualungMedia)
        current.play();
    })

    $("#peeping").on("click", function(){
        verStop(peepingtomMedia)
        current.play();
    })

    $("#dark").on("click", function(){
        verStop(darknecessitiesMedia)
        current.play();
    })

    $("#warriors").on("click", function(){
        verStop(warriorsMedia)
        current.play();
    })

    function verStop(mus){
        if(current != mus){
            current.stop()
            current = mus
        }
    }
}
