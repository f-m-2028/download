// ==============================================>>> {{ EVENTS }} <<<====================================
// ---------------------------------------------------------------- {{{ Variables }}} <<<
//
//  Hide
//
let hide = document.getElementById('hide');
let hideClose = document.getElementById('hideClose');
let hideOpen = document.getElementById('hideOpen');
// ---------------------------------------------------------------- {{{ Variables }}} <<<









// ---------------------------------------------------------------- {{{ Functions }}} <<<
//
//  Hide
//
if (hide && hideClose && hideOpen)
{
    hideOpen.addEventListener('click', () =>
    {
        hide.classList.toggle('active');
        hideOpen.classList.toggle('active');
        hideClose.classList.remove('active');
    });
    hideClose.addEventListener('click', () =>
    {
        hide.classList.toggle('active');
        hideOpen.classList.remove('active');
    });
}
// ---------------------------------------------------------------- {{{ Functions }}} <<<
// ==============================================>>> {{ EVENTS }} <<<====================================





























// ==============================================>>> {{ Animation }} <<<====================================
// ---------------------------------------------------------------- {{{ Variables }}} <<<
//
//  Animation Scroll
//
const animation = document.querySelectorAll('.animationScroll,        footer, .container, .content, .box-shadow, .card, .name, p, .box,         .progress');
// ---------------------------------------------------------------- {{{ Variables }}} <<<









// ---------------------------------------------------------------- {{{ Functions }}} <<<
//
//  Animation Scroll
//
const observer = new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
if (animation && observer)
{
    animation.forEach(section =>
    {
        observer.observe(section);
    });
}
// ---------------------------------------------------------------- {{{ Functions }}} <<<
// ==============================================>>> {{ Animation }} <<<====================================
