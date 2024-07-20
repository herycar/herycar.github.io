(() => { const // mobile menu setup
    btn = document.querySelector('header#main>.menu'),
    navbar = document.querySelector('header#main>nav');
  let active = false;
  btn.onclick = ev => {
    if (!active) {
      navbar.style.visibility = '';
      btn.style = '';
      navbar.children[0].style.opacity = '';
    }else {
      navbar.style.visibility = 'visible';
      btn.style = `
        width: 20px;
        height: 35px;
        margin-right: 28px;
      `;
      navbar.children[0].style.opacity = 1;
    };
    active = !active;
  }
})();

(() => { // efecto maquina de escribit titulo
  const main_title = document.querySelector('#home>.name>h1');

  let i=0; active=false;
  if (!active) { active = true; const animate = ev => {

      if (active) {
        main_title.onmouseenter = () => {};
        let j=1; const shadowLoop = setInterval(() => {
          if (j === 10) clearInterval(shadowLoop);
          main_title.style.textShadow = `
            0 0 ${j*2}px white,
            0 0 ${j*3}px white,
            0 0 ${j*4}px white`;
          j++;
        }, 30);
        setTimeout(() => {
          main_title.style.textShadow = `none`;
          main_title.style.fontSize = `1.2em`;
          main_title.innerHTML = '<h1> Herrería y Carpintería </h1>'
          main_title.style.opacity = 0;
          (() => {
            let j=.1; const opacityLoop = setInterval(() => {
              if ( j === 1 ) clearInterval(opacityLoop);
              main_title.style.opacity = j;
              j+=.1;
            }, 60);
          })();
          const underline = document.createElement('section');
          underline.style = `
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            margin: auto;
            width: 0;
            height: 2px;
            background: white;
          `;
          main_title.appendChild(underline);
          (() => {
            let j=1; const underlineLoop = setInterval(() => {
              if ( j >= 80) clearInterval(underlineLoop);
              underline.style.width = `${j}%`;
              j+=1.5;
            }, 15);
          })();

        }, 5e2);

      };

    }; main_title.onmouseenter = animate;
  };
})();

(() => { const // setup view_more buttons
    btn = [
      document.querySelector('.one>.left>.view_more>button'),
      document.querySelector('.two>.left>.view_more>button')
    ],
    active_view = [false, false],
    read_more = [
      /* one */ ev => {
        if (!active_view[0]) {
          const text = `<div><br>
            <i>me presento, mi nombre es</i><br>
            <h2 style="
              color: rgba(255, 217, 0, 8);
              font-size: 2em;
            "> Edwin Agudelo </h2>
            <i>y soy:</i><br>
            <i style="font-size: 1.7em;">· herrero ·</i><br>
            <i style="font-size: 1.7em;">· carpintero ·</i><br>
            <i style="
              color: rgba(255, 217, 0, 8);
              font-size: 1.8em;
            ">· electricista ·</i><br>
            <i style="font-size: 1.8em">· instalador de: ·</i><br>
            <i>· ·» cámaras de seguridad ·</i><br>
            <i>· ·» circuitos de seguridad ·</i><br>
            <i>· ... y un poco de todo ... ·</i><br>
            <div style="
              font-size: .8em;
              margin-top: 20px;
            "><i>
              ... y le dijo el aprendiz al maestro ...<br>
              · maestro, ¿qué es la rutina?<br>
              ... y entonces, este respondió ...<br><br>
              « es la llave con la que apasionas tu vida »<br>
              « tira la llave que cierra tu mente »<br>
              « abre tu mente, y reconoce tu llave »<br>
              « así podrás saborear cada instante de tu vida »<br>
            </i></div><br>
          </div>`;
          document.querySelector('.one>.right').innerHTML = text;
          document.querySelector('.one>.right').style.opacity = 1;
          btn[0].innerText = 'ver menos';
        }else {
          document.querySelector('.one>.right').innerHTML = '';
          document.querySelector('.one>.right').style.opacity = 0;
          btn[0].innerText = 'ver más';
        }
        active_view[0] = !active_view[0];
      },
      /* two */ ev => {
        if (!active_view[1]) {
          
        }
      }
    ];

  btn[0].onclick = read_more[0];
  /* btn[1].onclick = read_more[1]; */
})();

(() => { const // setup portfolio images
    selectors = document.querySelectorAll('.three>.selectors>ul>li>i'),
    project_template = `
      <div [type] class="project">
        <img src="[img]" alt="proyecto">
        <div class="info"><br>
          <div class="title">
            <h3><a href="/[project]"> [title] </a></h3>
          </div><br>
          <div class="description">
            <p> [description] </p>
          </div>
        </div>
      </div>
    `,
    projects_list = [
      {
        type: 'sala',
        project: '#',
        img: 'sala_2.jpg',
        title: 'Salas',
        description: 'Diseño y fabricación de salas elegantes, modernas y cautivadoras.'
      },
      {
        type: 'mueble',
        project: '#',
        img: 'mueble_2.jpg',
        title: 'Muebles',
        description: 'Diseño y fabricación de muebles elegantes, modernos y cautivadores.'
      },
      {
        type: 'tv',
        project: '#',
        img: 'tv_1.jpg',
        title: 'Unidades de TV',
        description: 'Diseño y fabricación de Unidades de TV elegantes, modernos y cautivadores.'
      }
      
    ];

    projects_list.forEach((project, i) => {
      document.querySelector('.three>.projects').innerHTML += project_template
        .replace('[type]', project.type)
        .replace('[img]', project.img)
        .replace('[project]', project.project)
        .replace('[title]', project.title)
        .replace('[description]', project.description);
    });
  
  const projects = document.querySelectorAll('.three>.projects>.project');
  let active = 'all';
  selectors.forEach(selector => selector.onclick = ev => {
    active = selector.getAttribute('select');
    projects.forEach(project => {
      if (active === 'all') {
        project.style.display = '';
      }else {
        project.attributes.hasOwnProperty(active)
        ? project.style.display = ''
        : project.style.display = 'none';
      };
    });
  });
})();

/* (() => { const // setup contact form
    name = document.querySelector('input[name]'),
    contact = document.querySelector('input[contact]'),
    message = document.querySelector('input[message]'),
    send_btn = document.querySelector('.send_message>button');
  send_btn.onclick = async ev => {
    const body = JSON.stringify({
      name: name.value,
      contact: contact.value,
      message: message.value,
    });
    const response = await (await fetch('https://edwinagudelojaramillo.loca.lt', { headers: {
        aj: 'enabled', 'Bypass-Tunnel-Reminder': 'secured', 'Content-Type': 'application/json'
      }, method: 'POST', body
    })).json();
    console.log(response);
  };
})(); */