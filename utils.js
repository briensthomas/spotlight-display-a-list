export function renderGoblins(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');

    const h2 = document.createElement('h2');
    h2.textContent = goblin.name;

    const h3 = document.createElement('h3');
    h3.textContent = goblin.hp;

    const img = document.createElement('img');
    img.src = goblin.img;

    const p = document.createElement('p');
    p.textContent = 'Goblins are the enemy!';

    div.append(h2, h3, img, p);
    return div;
}