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
            
            const link = document.createElement('a');
            link.href = 'public/file/f.pdf';
            link.download = 'f.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else 
        {
            alert('متبوسي يبت...');
        }
    });
}
// ---------------------------------------------------------------- {{{ Functions }}} <<<

// ==============================================>>> {{ Question }} <<<====================================


