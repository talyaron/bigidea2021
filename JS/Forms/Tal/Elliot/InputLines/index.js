function handleLineEnter(ev){
    ev.preventDefault();
    console.log(ev.target.elements.line.value);
    $('textarea').filter('line').val('');
}