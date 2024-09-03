let menubars = document.querySelector('#menu-bars');
let nav = document.querySelector('.navbar');

menubars.onclick = () =>
{
    menubars.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll = () =>
{
    menubars.classList.remove('fa-times');
    nav.classList.remove('active');

    if (window.scrollY > 60)
    {
        document.querySelector('#scrolltop').classList.add('active');
    }
    else
    {
        document.querySelector('#scrolltop').classList.remove('active');
    }
}

document.querySelector('#searchicon').onclick = () =>
{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>
{
    document.querySelector('#search-form').classList.remove('active');
}


function Refresh()
{
    document.querySelector('.refresh').classList.add('fade-out');
}
function Reload()
{
    setInterval(Refresh, 3000);
}
window.onload = Reload();