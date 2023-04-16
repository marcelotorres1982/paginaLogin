const usuarios = [
    {
        login: 'marcelo',
        pass: 'marcelo'
    },
    {
        login: 'giovanna',
        pass: 'giovanna'
    },
    {
        login: 'gisele',
        pass: 'gisele'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btnlogin')

botao.addEventListener('click', function () {
    let pegausuario = document.getElementById('usuario').value;
    let pegasenha = document.getElementById('senha').value;
    let validalogin = false;

    for (let i in usuarios) {
        if (pegausuario === usuarios[i].login && pegasenha === usuarios[i].pass) {
            validalogin = true;
            break;
        }
    }

    if (validalogin) {
        location.href = 'index.html'
    } else {
        alert('usuário e senha incorretos');
    }
});

