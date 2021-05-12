var i=0;
function add(){
    if (document.getElementById('test').value!='')
    {
        i++;
        var title = document.getElementById('test').value;
        var node = document.createElement('div');
        node.innerHTML = '<input type="checkbox" id="check' + i + '" name="check' + i + '"><label for="check' + i + '">'+ title +'</label>';
        document.getElementById('container').appendChild(node);
    }
}

// 1)
document.addEventListener("DOMContentLoaded", loadTasks)
