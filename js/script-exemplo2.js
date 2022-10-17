window.addEventListener('load', function(){
    let chave = document.getElementById('key');
    let valor = document.getElementById('valor');
    let save = document.getElementById('add');
    let remove = document.getElementById('remove');
    let response = document.getElementById('response');

    save.addEventListener('click', function(){
        let _chave = chave.value;
        let _valor = valor.value;
        localStorage.setItem(_chave, _valor);
        show();
    });

    remove.addEventListener('click', function(){
        localStorage.clear();
        show();
    });
    
    window.addEventListener('storage', function(event) {
        let key = event.key;
        let new_value = event.newValue;
        let old_value = event.oldValue;
        let storage_area = event.storageArea;

        key.innerHTML(key+"\n" +new_value + "\n"
         + old_value 
         + "\n" 
         + storage_area);
       exibir();
    });
  
    function show() {
        let str = "";
        let i;
        let len = localStorage.length;

        for ( i=0; i < len; i++ ) {
            let key = localStorage.key(i);
            let valor = localStorage.getItem(key);
            str += `${[i+1]} . ${key} : ${valor} <br>`;
        }

        valor = "";
        chave = "";
        response.innerHTML = str;
    }

    show();

});