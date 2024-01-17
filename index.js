const mahasiswaNim = '2022004010' ;
const updateData = {
    Nama   : 'Gina Nurbilkis',
    Gender : 'P',
    Prodi  : 'TI',
    Alamat : 'Cigombong'
};

fetch('http://localhost:3000/mahasiswa/${mahasiswaNim}', {
    method : 'PUT',
    headers:{
        'Content-Type': 'Application/json'
    },
    body   : JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error ('Error:', error));