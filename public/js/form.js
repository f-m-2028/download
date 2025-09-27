// ==============================================>>> {{ Question }} <<<====================================
// ---------------------------------------------------------------- {{{ Variables }}} <<<
const formQuest = document.getElementById('formQuest');
// ---------------------------------------------------------------- {{{ Variables }}} <<<









// ---------------------------------------------------------------- {{{ Functions }}} <<<
if (formQuest) 
{
    formQuest.addEventListener('submit', function (e) 
    {
        e.preventDefault();


        
        const val = document.getElementById('heartInput').value.trim();



        if (val === '💋') 
        {
            alert('يعمريييي امواااحححح 💋');
            window.location.href = 'public/file/f.pdf';
        } 
        else 
        {
            alert('متبوسي يبت...');
        }
    });
}
// ---------------------------------------------------------------- {{{ Functions }}} <<<

// ==============================================>>> {{ Question }} <<<====================================

