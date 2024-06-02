function port(){


const banner = document.getElementById('home');
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});
const ubahWarna = document.getElementById('pesan');
pesan.onclick = function () {
  alert('message sent');
};

var typed = new Typed('.typing', {
  strings: ['361955401031'],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true,
});

var typed = new Typed('.typing2', {
  strings: ['SDN 8 GAMBIRAN'],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed('.typing3', {
  strings: ['SMPN 1 TEGALSARI'],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed('.typing4', {
  strings: ['SMK17 AGUSTUS GENTENG'],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed('.typing5', {
  strings: ['POLITEKNIK NEGERI BANYUWANGI'],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});


// THREEJS
let width = 400;
let height = 400;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(20, width/height, 0.1, 20);
const canvas = document.getElementById('canvas1');
const renderer = new THREE.WebGLRenderer( {canvas});

renderer.setSize(width, height);
camera.position.z = 5;

// /* Geometri Material */
const geo = new THREE.BoxGeometry(1, 1, 1);

// /* Custom Material */
const ATexture = new THREE.TextureLoader().load('../mesnap2.jpg');

const material = new THREE.MeshBasicMaterial(
    {
        map: ATexture
    }
);
let mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

let pageX = 0.5;
let pageY = 0.5;

document.body.addEventListener('mousemove', (event) => {
  pageX = event.pageX / window.innerHeight; pageY = event.pageY/ window.innerHeight;
});
window.addEventListener('resize', function() {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function update() {
    mesh.rotation.y = (pageY - 0.5) * 2;
    mesh.rotation.x = (pageX - 0.5) * 2;

    requestAnimationFrame(update);
    renderer.render(scene, camera);
}
update();

// CANVAS 2
  let canvasKita = document.getElementById('canvas2');
  let ctx1 = canvasKita.getContext('2d');
  canvasKita.width = 400;
  canvasKita.height = 400;
  
  function lingkaran(x, y, r, w, kanan, kiri, atas, bawah, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.kanan = kanan;
    this.kiri = kiri;
    this.atas = atas;
    this.bawah = bawah;
  
    this.render = function () {
      ctx1.fillStyle = this.w;
      ctx1.beginPath();
      ctx1.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx1.fill();
  
      if (this.kanan) {
        this.x += speed;
      }
      if (this.kiri) {
        this.x -= speed;
      }
      if (this.atas) {
        this.y -= speed;
      }
      if (this.bawah) {
        this.y += speed;
      }
      if (this.y + this.r > canvasKita.height) {
        this.bawah = false;
        this.atas = true;
      } else if (this.y - this.r < 0) {
        this.bawah = true;
        this.atas = false;
      }
  
      if (this.x + this.r > canvasKita.width) {
        this.kanan = false;
        this.kiri = true;
      } else if (this.x - this.r < 0) {
        this.kanan = true;
        this.kiri = false;
      }
    };
  }
  
  let lingkaran1 = new lingkaran(350, 300, 30, '#AAB9BF', true, false ,true, false, 1);
  let lingkaran2 = new lingkaran(250, 10, 25, '#D9734E', false, true, true, false, 2);
  let lingkaran3 = new lingkaran(100, 200, 50, '#96A680', true, false, false, true, 2);
  let lingkaran4 = new lingkaran(400, 150, 60, '#0D0D0D', true, true, false, true, 2);
  let lingkaran5 = new lingkaran(200, 15, 45, '#458985', true, true, false, true, 2);
  let lingkaran6 = new lingkaran(150, 200, 20, '#DBA67B', false, true, false, false, 2);
  
  function animasi() {
    ctx1.save();
    ctx1.clearRect(0, 0, canvasKita.width, canvasKita.height);
  
    ctx1.globalAlpha = 0.7;
    lingkaran1.render();
    lingkaran2.render();
    lingkaran3.render();
    lingkaran4.render();
    lingkaran5.render();
    lingkaran6.render();
    ctx1.restore();
  }
  setInterval(animasi, 15);


// CANVAS 3
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  canvas3.width = 400;
  canvas3.height = 400;
  
  // background
  ctx3.fillStyle = '#B1ABA8';
  ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
  
  // Menentukan posisi
  var x = canvas3.width / 2;
  var y = canvas3.height / 2;
  var radius = 73;
  var offset = 50;
  
  // Kuping kanan
  ctx3.save();
  ctx3.beginPath();
  ctx3.arc(x - 75, y - 60, 30, 0, 2 * Math.PI, false);
  ctx3.closePath();
  ctx3.lineWidth = 35;
  ctx3.strokeStyle = '#919C9B';
  ctx3.stroke();
  ctx3.fillStyle = '#C6CECD';
  ctx3.fill();
  
  // Kuping kiri
  ctx3.save();
  ctx3.beginPath();
  ctx3.arc(x + 75, y - 60, 30, 0, 2 * Math.PI, false);
  ctx3.closePath();
  ctx3.lineWidth = 35;
  ctx3.strokeStyle = '#919C9B';
  ctx3.stroke();
  ctx3.fillStyle = '#C6CECD';
  ctx3.fill();
  // mendefinisikan area/bentuk clipping
  ctx3.save();
  ctx3.beginPath();
  ctx3.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx3.fillStyle = '#868A89';
  ctx3.fill();
  ctx3.clip();
  
  // draw salmon circle inside clipping region
  ctx3.beginPath();
  ctx3.arc(x + 4, y - 4, radius, 0, 2 * Math.PI, false);
  ctx3.fillStyle = '#919C9B';
  ctx3.fill();
  
  // alis kanan
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x - 36, y - 35);
  ctx3.lineTo(x - 25, y - 20);
  ctx3.lineTo(x - 40, y - 26);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  
  // alis kiri
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 36, y - 35);
  ctx3.lineTo(x + 25, y - 20);
  ctx3.lineTo(x + 40, y - 26);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  
  //bola mata kanan
  ctx3.beginPath();
  ctx3.fillStyle = 'white';
  ctx3.arc(x - 25, y - 22, 10, 0, Math.PI * 2, true);
  ctx3.fill();
  ctx3.clip();
  
  ctx3.beginPath();
  ctx3.fillStyle = 'black';
  ctx3.arc(x - 25, y - 20, 7, 0, Math.PI * 2, true);
  ctx3.fill();
  
  ctx3.restore();
  ctx3.beginPath();
  ctx3.fillStyle = 'white';
  ctx3.arc(x - 30, y - 25, 3, 0, Math.PI * 2, true);
  ctx3.fill();
  
  //bola mata kiri
  ctx3.beginPath();
  ctx3.fillStyle = 'white';
  ctx3.arc(x + 25, y - 22, 10, 0, Math.PI * 2, true);
  ctx3.fill();
  ctx3.clip();
  
  ctx3.beginPath();
  ctx3.fillStyle = 'black';
  ctx3.arc(x + 25, y - 20, 7, 0, Math.PI * 2, true);
  ctx3.fill();
  
  ctx3.restore();
  ctx3.beginPath();
  ctx3.fillStyle = 'white';
  ctx3.arc(x + 30, y - 25, 3, 0, Math.PI * 2, true);
  ctx3.fill();
  
  // hidung
  ctx3.save();
  ctx3.beginPath();
  ctx3.fillStyle = 'black';
  ctx3.arc(x, y + 10, 10, 0, Math.PI * 1, false);
  ctx3.closePath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x - 0, y + 10);
  ctx3.lineTo(x - 0, y + 30);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  ctx3.restore();
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 0, y + 30);
  ctx3.quadraticCurveTo(x - 10, y + 35, x - 20, y + 25);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  
  ctx3.restore();
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 0, y + 30);
  ctx3.quadraticCurveTo(x + 10, y + 35, x + 20, y + 25);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  
  // kumis kanan
  ctx3.save();
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x - 50, y + 5);
  ctx3.lineTo(x - 100, y - 10);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  ctx3.restore();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x - 50, y + 15);
  ctx3.lineTo(x - 100, y + 15);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  ctx3.restore();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x - 50, y + 25);
  ctx3.lineTo(x - 100, y + 35);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  // kumis kiri
  ctx3.save();
  ctx3.beginPath();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 50, y + 8);
  ctx3.lineTo(x + 100, y - 12);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  ctx3.restore();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 50, y + 16);
  ctx3.lineTo(x + 100, y + 15);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  
  ctx3.restore();
  ctx3.lineCap = 'round';
  ctx3.moveTo(x + 50, y + 27);
  ctx3.lineTo(x + 100, y + 35);
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = 'black';
  ctx3.stroke();
  ctx3.fillStyle = 'black';
  ctx3.fill();
  

// CANVAS 4
const canvas4= document.querySelector('#canvas4');
canvas4.width = 400;
canvas4.height = 400;
const ctx4 = canvas4.getContext('2d');
const imageData = ctx4.getImageData(0, 0, canvas4.width, canvas4.height);

function gambarTitik(imageDataTemp, x, y, r, g, b) {
    let index;
    index = 4 * (x + y * canvas4.width);
    imageDataTemp.data[index + 0] = r; // R
    imageDataTemp.data[index + 1] = g; // G
    imageDataTemp.data[index + 2] = b; // B
    imageDataTemp.data[index + 3] = 255; // A
  }
  /* Menggambar Garis dengan Algoritma DDA*/
  function gradient_line(imageData, x1, y1, x2, y2, r, g, b) {
    let dx = x2 - x1; // Bisa positif atau negatif
    let dy = y2 - y1; // Bisa positif atau negatif
    if (Math.abs(dx) > Math.abs(dy)) {
      // Penambahan pada sumbu x
      let y = y1;
      if (x2 > x1) {
        // Bergerak ke kanan
        for (let x = x1; x < x2; x++) {
          y = y + dy / Math.abs(dx); // 1/m
          gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
        }
      } else {
        // Bergerak ke kiri
        for (let x = x1; x > x2; x--) {
          y = y + dy / Math.abs(dx); // 1/m
          gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
        }
      }
    } else {
      // Penambahan pada sumbu y
      let x = x1;
      if (y2 > y1) {
        // Bergerak ke kanan
        for (let y = y1; y < y2; y++) {
          x = x + dx / Math.abs(dy); // m
          gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
        }
      } else {
        // Bergerak ke kiri
        for (let y = y1; y > y2; y--) {
          x = x + dx / Math.abs(dy); // m
          gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
        }
      }
    }
  }
  // Menggambar Polygon //
  function polygon(imageDataTemp, point_array, r, g, b) {
    let point = point_array[0];
    for (let i = 1; i < point_array.length; i++) {
      let point2 = point_array[i];
      gradient_line(imageDataTemp, point.x, point.y, point2.x, point2.y, r, g, b);
      point = point2;
    }
    gradient_line(imageDataTemp, point.x, point.y, point_array[0].x, point_array[0].y, r, g, b);
  }

  function translasi(titikLama, T) {
    let x_baru = titikLama.x + T.x;
    let y_baru = titikLama.y + T.y;
    return { x: x_baru, y: y_baru };
  }
  function skala(titikLama, S) {
    let x_baru = titikLama.x * S.x;
    let y_baru = titikLama.y * S.y;
  
    return { x: x_baru, y: y_baru };
  }
  function rotasi(titikLama, sudut) {
    let x_baru = titikLama.x * Math.cos(sudut) - titikLama.y * Math.sin(sudut);
    let y_baru = titikLama.x * Math.sin(sudut) + titikLama.y * Math.cos(sudut);
    return { x: x_baru, y: y_baru };
  }
  function rotasiFP(titikLama, titikPutar, sudut) {
    let p1 = translasi(titikLama, { x: -titikPutar.x, y: -titikPutar.y });
    let p2 = rotasi(p1, sudut);
    let p3 = translasi(p2, titikPutar);
  
    return p3;
  }
  function skalaFP(titikLama, titikPusat, S) {
    let p1 = translasi(titikLama, { x: -titikPusat.x, y: -titikPusat.y });
    let p2 = skala(p1, S);
    let p3 = translasi(p2, titikPusat);
    return p3;
  }
  function translasiArray(arrayTitik, T) {
    let arrayHasil = [];
    for (let i = 0; i < arrayTitik.length; i++) {
      let temp = translasi(arrayTitik[i], T);
      arrayHasil.push(temp);
    }
    return arrayHasil;
  }
  function rotasiArray(arrayTitik, titikPusat, sudut) {
    let arrayHasil = [];
    for (let i = 0; i < arrayTitik.length; i++) {
      let temp = rotasiFP(arrayTitik[i], titikPusat, sudut);
      arrayHasil.push(temp);
    }
    return arrayHasil;
  }
  function skalaArray(arrayTitik, titikPusat, S) {
    let arrayHasil = [];
    for (let i = 0; i < arrayTitik.length; i++) {
      let temp = skalaFP(arrayTitik[i], titikPusat, S);
      arrayHasil.push(temp);
    }
    return arrayHasil;
  }
  let pointArray = [
    { x: 200, y: 200 },
    { x: 150, y: 150 },
    { x: 100, y: 200 },
  ];
  polygon(imageData, pointArray, 255, 0, 0);
  let pointArray3 = rotasiArray(pointArray, { x: 100, y: 200 }, Math.PI / 2);
  polygon(imageData, pointArray3, 0, 0, 255);
  let pointArray4 = skalaArray(pointArray, { x: 100, y: 250 }, { x: 2, y: 2 });
  polygon(imageData, pointArray4, 0, 255, 0);
  ctx4.putImageData(imageData, 0, 0);



}
