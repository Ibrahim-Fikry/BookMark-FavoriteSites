if (localStorage.getItem('data') == null) {
    sites = []
} else {
    sites = JSON.parse(localStorage.getItem('data'))
    display()
}

function get() {
    var inputs = {
        name: document.getElementById('sname'),
        url: document.getElementById('surl')
    }
    return inputs
}

function getinfo() {
    var inputsinfo = {
        nameinfo: get().name.value,
        urlinfo: get().url.value,
    }
    return inputsinfo
}


function add() {
    sites.push(getinfo())
    localStorage.setItem('data', JSON.stringify(sites))
    display()
    console.log(sites);
}

function delet(id) {
    sites.splice(id, 1)
    display()
}

function display() {
    var divv = ""
    for (let index = 0; index < sites.length; index++) {

        divv += `
      
        <div class=" w-100 m-auto bg-light text-center p-5 shadow d-block mb-4 d-flex ">
        <input type="text" id="sname" class="form-control mb-3 w-25" readonly  value="${sites[index].nameinfo}">
        <a href="${sites[index].urlinfo}" target="_blank"> <button class="btn btn-info lbl w-100" id="btn " >Visit site</button></a>
        <button class="btn btn-info lbl " id="btn " onclick="delet(${index})" >Delet site</button>

    </div>
    
        `
        console.log(sites);
    }
    document.getElementById('content').innerHTML = divv
}