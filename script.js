let areaMenu = document.getElementById("areaMenu");
let areaKeranjang = document.getElementById("areaKeranjang");
let totalHarga = document.getElementById("totalHarga");

// data menu woi
let daftarMenu = ["kopi itam", "kopi susu", "milktea", "americano", "matcha"];
let hargaMenu = [5000, 10000, 5000, 10000, 15000];

// placeholder keranjang
let keranjang = [];

function renderMenu() {
  let elemenHTML = "<ul class='list-group'>";

  for (let i = 0; i < daftarMenu.length; i++) {
    elemenHTML += `
    <li class= 'list-group-item d-flex justify-content-between align-items-center'>
    <div>
        <h5 >${daftarMenu[i]}</h5>
        <small class= 'text-muted'>${hargaMenu[i]}</small>
    </div>
    <button onclick='tambahKeranjang(${i})' class= 'btn-text theme-warning'>tambah</button>
      </li>
    `;
  }

  elemenHTML += "</ul>";
  areaMenu.innerHTML = elemenHTML;
}

renderMenu();
renderKeranjang();

function tambahKeranjang(index) {
  console.log(index, daftarMenu[index], hargaMenu[index]);
  keranjang.push(index);
  renderKeranjang();
}

function hapusDariKeranjang(index) {
  console.log(index, daftarMenu[index], hargaMenu[index]);
  keranjang.splice(index, 1);
  renderKeranjang();
}

function renderKeranjang() {
  if (keranjang.length === 0) {
    areaKeranjang.innerHTML = `
   <p class='muted'> keranjang kosong woi</p>
   `;

    totalHarga.innerHTML = `
    Rp.0
   `;

    return;
  }

  let elemenHTML = "<ul class = 'list-group'>";
  let totalHargaPesanan = 0;

  for (let i = 0; i < keranjang.length; i++) {
    let indexMenu = keranjang[i];

    let namaPesanan = daftarMenu[indexMenu];
    let hargaPesanan = hargaMenu[indexMenu];

    totalHargaPesanan += hargaPesanan;

    elemenHTML += `
     <li class = 'list-group-item d-flex justify-content-between align-items-center list-group-item-success mb-1 rounded'>
      ${namaPesanan} (Rp. ${hargaPesanan})
      <button onclick='hapusDariKeranjang(${i})' class = 'btn-text theme-danger'>x</button>
     </li>
     `;
  }

  elemenHTML += "</ul>";

  totalHarga.innerHTML = "Rp. " + totalHargaPesanan;
  areaKeranjang.innerHTML = elemenHTML;
}

function prosesCheckout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong.");
    return;
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  window.location.href = "payment.html";
}



