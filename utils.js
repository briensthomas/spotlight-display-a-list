export function renderGoblins(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');

    const h2 = document.createElement('h2');
    h2.textContent = goblin.name;

    const h3 = document.createElement('h3');
    h3.textContent = `${goblin.hp} HP`;

    const img = document.createElement('img');
    img.src = goblin.img;

    const p = document.createElement('p');
    p.textContent = 'Goblins are the enemy!';

    div.append(h2, h3, img, p);
    return div;
}

export function renderLandscape(landscape) {
    const landscapeDiv = document.createElement('div');
    landscapeDiv.classList.add('landscape');

    const landscapeH2 = document.createElement('h2');
    landscapeH2.textContent = landscape.name;

    const landscapeImg = document.createElement('img');
    landscapeImg.src = `./assets/${landscape.name}.jpg`;

    const landscapeP = document.createElement('p');
    landscapeP.textContent = `Shy thinks this is a ${landscape.shyEnjoyment} spot to visit`;

    landscapeDiv.append(landscapeH2, landscapeImg, landscapeP);
    return landscapeDiv;
}

export function renderMovie(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const movieh2 = document.createElement('h2');
    movieh2.textContent = movie.title;

    const movieImg = document.createElement('img');
    movieImg.src = movie.img;

    const movieh4 = document.createElement('h4');
    movieh4.textContent = `Genre: `;
    movieh4.classList.add('genre');

    const ul = document.createElement('ul');
    ul.classList.add('genre');
    for (let genre of movie.genre) {
        const li = document.createElement('li');
        li.textContent = genre;
        ul.append(li);
    }

    const actorUl = document.createElement('ul');
    actorUl.classList.add('actors');
    for (let actor of movie.actors) {
        const li = document.createElement('li');
        li.textContent = actor + ' ';
        actorUl.append(li);
    }

    movieDiv.append(movieh2, movieImg, movieh4, ul, actorUl);
    return movieDiv;
}