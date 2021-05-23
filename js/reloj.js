let formulario = document.forms['formulario'],
    tiempoEstudio = formulario['tiempoEstudio'].value - 1,
    minEstudio = tiempoEstudio,
    descansoCorto = formulario['tiempoDescansoCorto'].value - 1,
    descansoLargo = formulario['tiempoDescansoLargo'].value - 1,
    segEstudio = 59,
    descanso = false,
    noSesion = 0,
    audio = new Audio('https://github.com/Drope25/hosting/blob/main/audio/alarma.wav'),
    empezar = true;

const modificar = (formulario) => {
    let minEstudio = formulario['tiempoEstudio'].value - 1,
        descansoCorto = formulario['tiempoDescansoCorto'].value - 1,
        descansoLargo = formulario['tiempoDescansoLargo'].value - 1;
}




const mostrarRelojEstudio = () => {
    if (empezar) {
        document.getElementById('stop').innerHTML = '<button id="stop--btn" class="stop" onclick="location.reload()"> <ion-icon name="stop"></ion-icon> </button>';
        empezar = false;
    }
    document.getElementById('hora').innerHTML = `${minEstudio}:${segEstudio}`;
    if (!descanso) {
        document.getElementById('estado').innerHTML = 'ESTUDIANDO';
    };
    if (segEstudio == 0) {
        segEstudio = 59;
        if (minEstudio != 0) {
            --minEstudio;
        } else {
            if (!descanso) {
                alert('Tiempo de estudio terminado');
                document.getElementById('hora').innerHTML = 'Tiempo de estudio terminado';
                document.getElementById('estado').innerHTML = 'DESCANSANDO';
                if ((noSesion + 1) % 4 == 0) {
                    minEstudio = descansoLargo;
                    segEstudio = 59;
                } else {
                    minEstudio = descansoCorto;
                    segEstudio = 59;
                };
                document.getElementById('alarma').innerHTML = '<iframe src="audio/halloween_theme.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe>';
                descanso = true;
                ++noSesion;
            } else {
                alert('Tiempo de descnaso terminado');
                document.getElementById('hora').innerHTML = 'Tiempo de Descanso terminado';
                minEstudio = tiempoEstudio;
                segEstudio = 59;
                document.getElementById('alarma').innerHTML = '<iframe src="audio/halloween_theme.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe>';
                descanso = false;
                ++noSesion;
            }
        };
    } else {
        --segEstudio;
    };
};




document.getElementById('tiempoEstudio').addEventListener('change', modificar(formulario));
document.getElementById('tiempoDescansoCorto').addEventListener('change', modificar(formulario));
document.getElementById('tiempoDescansoLargo').addEventListener('change', modificar(formulario));
