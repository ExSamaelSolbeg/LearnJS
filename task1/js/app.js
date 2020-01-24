document.addEventListener('DOMContentLoaded', () => {
    const totalZombiesElement = document.querySelector('.total-zombies');
    const deadZombiesElement = document.querySelector('.dead-zombies');
    const smallZombiesElement = document.querySelector('.small-zombies');
    const madZombiesElement = document.querySelector('.mad-zombies');
    const strongZombiesElement = document.querySelector('.strong-zombies');

    let deadCount = 0;
    let smallCount = 0;
    let madCount = 0;
    let strongCount = 0;

    for (let i = 0; i < zombiesData.length; i++) {
        const zombieData = zombiesData[i];
        const health = +zombieData;

        if (isNaN(health) || health <= 0) {
            deadCount++;
        } else {
            if (health < 11) {
                smallCount++;
            } else if (health < 21) {
                madCount++;
            } else {
                strongCount++;
            }
        }
    }

    const totalCount = deadCount + smallCount + madCount + strongCount;

    const totalCountText = `${totalZombiesElement.innerText} ${totalCount}`;
    const deadCountText = `${deadZombiesElement.innerText} ${deadCount}`;
    const smallCountText = `${smallZombiesElement.innerText} ${smallCount}`;
    const madCountText = `${madZombiesElement.innerText} ${madCount}`;
    const strongCountText = `${strongZombiesElement.innerText} ${strongCount}`;

    console.log(totalCountText);
    console.log(deadCountText);
    console.log(smallCountText);
    console.log(madCountText);
    console.log(strongCountText);

    totalZombiesElement.textContent = totalCountText;
    deadZombiesElement.textContent = deadCountText;
    smallZombiesElement.textContent = smallCountText;
    madZombiesElement.textContent = madCountText;
    strongZombiesElement.textContent = strongCountText;
});
