// Fungsi untuk menghitung volume balok
function volumeBalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
}

// Fungsi untuk menghitung volume kubus
function volumeKubus(sisi) {
    return Math.pow(sisi, 3);
}

// Fungsi untuk menghitung volume prisma segitiga
function volumePrismaSegitiga(alas, tinggiSegitiga, tinggiPrisma) {
    return (alas * tinggiSegitiga * tinggiPrisma) / 2;
}

// Memperbarui hasil volume balok di HTML
document.getElementById("balok").querySelector("p").innerText += volumeBalok(5, 3, 2);

// Memperbarui hasil volume kubus di HTML
document.getElementById("kubus").querySelector("p").innerText += volumeKubus(4);

// Memperbarui hasil volume prisma segitiga di HTML
document.getElementById("prisma").querySelector("p").innerText += volumePrismaSegitiga(6, 4, 8);