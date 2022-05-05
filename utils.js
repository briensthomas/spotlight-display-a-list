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