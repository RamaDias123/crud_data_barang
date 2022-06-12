var dataItem = [
    "Buku Tulis",
    "Pensil",
    "Penghapus",
    "Spidol",
];

function showItem() {
    var listItem = document.getElementById('list-item');

    // clear list barang
    listItem.innerHTML = "";

    // cetak semua  barang
    for (let i = 0; i < dataItem.length; i++) {
        var btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";
        listItem.innerHTML += "<li>" + dataItem[i] + " [" + btnEdit + " | " + btnHapus + "]</li>";
    }
}

function addItem() {
	var input = document.querySelector("input[name=item]");
	dataItem.push(input.value);
	showItem();
}

function editBarang(id) {
	var newBarang = prompt("Nama baru", dataItem[id]);
	dataItem[id] = newBarang;
	showItem();
}

function deleteBarang(id) {
	dataItem.splice(id, 1);
	showItem();
}

showItem();