// -------------------  local storage
if (localStorage.getItem('data') == null) {
    sites = []
} else {
    sites = JSON.parse(localStorage.getItem('data'))
    display()
}

//----------------------------------------
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
//------------------------------------validation

//-----------------------------------clear
function clear() {

    get().name.value = ""
    get().url.value = ""

}
//------------------------------ duplicate
function add() {
    for (let index = 0; index < sites.length; index++) {
        if (get().name.value != sites[index].nameinfo && get().url.value != sites[index].urlinfo) {

            sites.unshift(getinfo())
            localStorage.setItem('data', JSON.stringify(sites))
            clear()
            Swal.fire(
                'Good job!',
                'Your site was added',
                'success'
            )
            display()

        } else {
            Swal.fire({
                title: 'duplicate',
                text: "sites cn`t be repeated",
                icon: 'error',
            })
        }
    }

}
//--------------------------------- add 
// function add() {
//     if (get().name.value != "" && get().url.value != "") {
//         sites.unshift(getinfo())
//         localStorage.setItem('data', JSON.stringify(sites))
//         clear()
//         Swal.fire(
//             'Good job!',
//             'Your site was added',
//             'success'
//         )
//         display()

//     } else {
//         Swal.fire({
//             title: 'not complet!',
//             text: "please fill all inputs",
//             icon: 'error',
//         })
//     }
// }

//---------------------------delete


function delet(id) {


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
        if (result.isConfirmed) {
            sites.splice(id, 1)
            localStorage.setItem('data', JSON.stringify(sites))
            display()
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}

function display() {
    var divv = ""
    for (let index = 0; index < sites.length; index++) {

        divv += `
      
 
    
    <div class=" row w-100 m-auto bg-light text-center p-5 shadow  mb-4 d-flex  ">

    <div class="col-6">
        <input type="text" id="sname" class="form-control mb-3 w-100" readonly value="${sites[index].nameinfo}">
    </div>
    <div class="col-2">
        <a href="${sites[index].urlinfo}" target="_blank" id="btn "class="btn btn-info  "> Visit site</a>
        </div>
        <div class="col-2">
        <button class="btn btn-info " id="btn" onclick="delet(${index})">Delet site</button>
    </div>
</div>
        `
        console.log(sites);
    }
    document.getElementById('content').innerHTML = divv
}