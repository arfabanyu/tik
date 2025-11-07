// ====== 1. DATA GAME (Database Cerita) ======
// Di sinilah Anda menulis semua cerita, dialog, dan pilihan.

const gameData = {
  // ------------------------------------------------------------------
  // --- Cerita Samy (Total 11 Scenes: Index 0 sampai 10) ---
  // ------------------------------------------------------------------
  samy: {
    name: 'Samy',
    scenes: [
      // Index 0: KONTEKS AWAL (Kabur dari Tugas)
      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Samy',
        dialog:
          '(Buset, panas banget cuacanya. Jadi males dokum. Mending aku mancing di Roblox bentar. Di mana ya tempat yang aman? Ah, WC paling ujung sekolah boleh tuh, sepi.',
        choices: [
          {
            text: 'Lanjut (Pergi ke WC)',
            nextScene: 1,
          },
        ],
      }, // Index 1: Momen Krusial di WC (Narator)

      {
        bg: './assets/bg_wc.png',
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Samy asik teriak-teriak karena dapat ikan langka di Roblox. Tiba-tiba, Jerry, masuk WC dan bertanya.',
        choices: [{ text: 'Lanjut', nextScene: 2 }],
      }, // Index 2: Jerry Bertanya

      {
        bg: './assets/bg_wc.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'inactive' },
          { id: 'sprite-jery', pos: 'left', status: 'active' },
        ],
        speaker: 'Jery',
        dialog: 'Sam, ngapain lu teriak-teriak?',
        choices: [
          {
            text: 'Jawab dengan suara pelan',
            nextScene: 3,
          },
          {
            text: 'Jawab sambil teriak',
            nextScene: 4,
          },
        ],
      }, // Index 3: Respon Pelan (Good Track A - Lia muncul di Scene 5)

      {
        bg: './assets/bg_wc.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'active' },
          { id: 'sprite-jery', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Samy',
        dialog: '*Berbisik* Jerry, aku lagi mancing, jangan berisik.',
        choices: [{ text: 'Lanjut', nextScene: 5 }],
      }, // Index 4: Respon Keras (Bad Track A - Lia muncul di Scene 5)

      {
        bg: './assets/bg_wc.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'active' },
          { id: 'sprite-jery', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Samy',
        dialog:
          'JERRY! Tadi aku dapet ikan langka!!! *Jerry hanya geleng-geleng kepala*.',
        choices: [{ text: 'Lanjut', nextScene: 5 }],
      }, // Index 5: Lia Muncul & Konfrontasi (Merge point dari Scene 3 & 4)

      {
        bg: './assets/bg_wc_luar.png',
        sprites: [{ id: 'sprite-lia', pos: 'left', status: 'active' }],
        speaker: 'Lia',
        dialog:
          '*Lia tiba-tiba lewat, mendengar bisik bisik/teriakan dari dalam WC*. Ada suara kak Samy? Sama siapa? Kok bisik-bisik gitu? *Lia kepo*',
        choices: [{ text: 'Lanjut', nextScene: 6 }],
      }, // Index 6: Pilihan Krusial (Klarifikasi vs Kabur)

      {
        bg: './assets/bg_wc_luar.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
          { id: 'sprite-jery', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Lia',
        dialog:
          'Kak Samy! Kenapa kakak di sini?! Aku denger kakak ngobrol... sama... Jerry? Kakak... lagi ngapain?',
        choices: [
          {
            text: 'Aku... aku lagi main Roblox, Lia.',
            nextScene: 7,
          },
          {
            text: '*Kabur*',
            nextScene: 8,
          },
        ],
      }, // Index 7: Klarifikasi Berhasil (Good Ending Track)

      {
        bg: './assets/bg_koridor.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
          { id: 'sprite-jery', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Lia',
        dialog:
          '*Ketawa kecil* Oohh, main Roblox! Pantesan. Aku kira... *Lia langsung ngakak* Lagian kakak ngapain main roblox di sini. Lanjut dokum lagi sana. Jangan kabur-kaburan terus, nanti diomelin Kak Khaila.',
        choices: [{ text: 'Lanjut', nextScene: 9 }], // Menuju Epilog Good (Index 9)
      }, // Index 8: Kabur & Gosip Menyebar (Bad Ending Track)

      {
        bg: './assets/bg_koridor.png',
        sprites: [
          { id: 'sprite-lia', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'right', status: 'inactive' },
          { id: 'sprite-ajeng', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Lia',
        dialog:
          'Arfa! Ajeng! Tadi Samy kabur dari WC, mukanya panik! Jangan-jangan dia lagi ngapa-ngapain sama Jerry! *Lia berbisik sambil cekikikan*',
        choices: [{ text: 'Lanjut', nextScene: 10 }], // Menuju Epilog Bad (Index 10)
      }, // Index 9: Epilog Good Ending (Klarifikasi Berhasil)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Lia tidak menyebar gosip karena Samy langsung klarifikasi. Samy kembali ke lapangan dan lanjut ngedokum. Gosip aneh berhasil dihindari. TIK tetap aman.',
        isEnding: true,
      }, // Index 10: Epilog Bad Ending (Jadi Bahan Candan)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          "Gosip menyebar cepat di TIK. Setiap Samy muncul, Lia, Banyu, bahkan Ajeng, akan melirik dan tertawa kecil. 'Der Refan' ikut-ikutan nyindir. Samy, yang canggung, hanya bisa tersenyum dan memegang hidung. Ia akan menjadi bahan candaan TIK hingga akhir kepengurusan.",
        isEnding: true,
      },
    ],
  },
  // ------------------------------------------------------------------
  // --- Cerita Khaila (Total 13 Scenes: Index 0 sampai 12) ---
  // ------------------------------------------------------------------
  khaila: {
    name: 'Khaila',
    scenes: [
      // Index 0: Pembuka (Narator)
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [],
        speaker: 'Narator',
        dialog: 'Di Sabtu siang yang terik di sekolah.',
        choices: [{ text: 'Lanjut', nextScene: 1 }],
      }, // Index 1: Persiapan dan Keluhan Mager (Pilihan Krusial A)
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Khaila',
        dialog:
          '(Duh, panas banget. Males banget ke lapangan. Mana tuh Samy? Ngilang mulu nih anak.)',
        choices: [
          {
            text: 'Telfon Samy',
            nextScene: 2,
          },
          {
            text: 'Langsung ke lapangan',
            nextScene: 6,
          },
        ],
      }, // Index 2: Omelin Samy (Dialog Khaila A - Good Track)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'left', status: 'active' },
          { id: 'sprite-samy', pos: 'right', status: 'inactive' },
        ],
        speaker: 'Khaila',
        dialog: 'Halo, Sam! Lu di mana?! Ini udah mulai!',
        choices: [{ text: 'Lanjut', nextScene: 3 }],
      }, // Index 3: Omelin Samy (Dialog Samy B)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'left', status: 'inactive' },
          { id: 'sprite-samy', pos: 'right', status: 'active' },
        ],
        speaker: 'Samy',
        dialog: 'Lagi jajan bentar di bang Memet.',
        choices: [{ text: 'Lanjut', nextScene: 4 }],
      }, // Index 4: Omelin Samy (Dialog Khaila C)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'left', status: 'active' },
          { id: 'sprite-samy', pos: 'right', status: 'inactive' },
        ],
        speaker: 'Khaila',
        dialog: 'Ya udah, cepetan! ini voli ga ada yang dokum.',
        choices: [{ text: 'Lanjut', nextScene: 5 }],
      }, // Index 5: Omelin Samy (Telepon Ditutup)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Khaila',
        dialog: '*Matiin telepon*',
        choices: [{ text: 'Lanjut ke lapangan', nextScene: 6 }],
      }, // Index 6: Langsung Lapangan (Good Track B & Bad Track)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-khaila', pos: 'left', status: 'active' }],
        speaker: 'Khaila',
        dialog: '*Dokum IG Story Futsal Wilhelmina*',
        choices: [{ text: 'Lanjut.', nextScene: 7 }],
      }, // Index 7: Perasaan Khaila (Pilihan Krusial B)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-khaila', pos: 'left', status: 'active' }],
        speaker: 'Khaila',
        dialog: 'Keknya kejauhan deh...',
        choices: [
          {
            text: 'Maju',
            nextScene: 8, // Lanjut ke potensi bahaya (Bad Track)
          },
          {
            text: 'Tetep di tempat',
            nextScene: 12, // Lompat ke Epilog Good (Index 12)
          },
        ],
      }, // Index 8: Khaila Maju (Bad Track Berlanjut)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Khaila',
        dialog: '*Maju*',
        choices: [{ text: 'Lanjut', nextScene: 9 }],
      }, // Index 9: Peringatan Pemain

      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-bola', pos: 'right', status: 'inactive' },
        ],
        speaker: 'Pemain Bola',
        dialog: 'AWAAASSS!!!',
        choices: [{ text: 'Lanjut', nextScene: 10 }],
      }, // Index 10: Dampak

      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-bola', pos: 'center', status: 'active' },
        ],
        speaker: '',
        dialog: '*DUAARRRR!!!*',
        choices: [{ text: 'Lanjut', nextScene: 11 }], // Menuju Epilog Bad (Index 11)
      }, // Index 11: Epilog Bad Ending (Kegebok)

      {
        bg: './assets/bg_rumahsakit.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Khaila yang terkejut terkena gebok di muka sehingga membuat kacamatanya patah dan salah satu matanya memerah, langsung dilarikan ke RS oleh teman-temannya.',
        isEnding: true,
      }, // Index 12: Epilog Good Ending (Aman)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Khaila yang terkejut tiba-tiba ada bola melayang melewati tepat di depan wajahnya langsung merasa lega dan bersyukur karena tidak jadi maju mendekati permainan untuk mengambil dokum yang lebih bagus.',
        isEnding: true,
      },
    ],
  },
  // ------------------------------------------------------------------
  // --- Cerita Faiz (Total 11 Scenes: Index 0 sampai 10) ---
  // ------------------------------------------------------------------
  faiz: {
    name: 'Faiz',
    scenes: [
      // Index 0: KONTEKS AWAL (Narator)
      {
        bg: './assets/bg_sekolah_pagi.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Di hari Jumat malam yang meriah, TIK kelas 11 dan Faiz bertugas mendokumentasikan Latihan Dasar Kepemimpinan Siswa (LDKS).',
        choices: [{ text: 'Lanjut', nextScene: 1 }],
      }, // Index 1: Penolakan Tugas (Pilihan Krusial A)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-faiz', pos: 'center', status: 'inactive' },
          { id: 'sprite-lia', pos: 'left', status: 'active' },
        ],
        speaker: 'Lia',
        dialog: 'Kak Faiz, kakak nanti IGS ya.',
        choices: [
          {
            text: '*Ngangguk*',
            nextScene: 2,
          },
          {
            text: 'Iya, iya, nanti saya IGS.',
            nextScene: 5, // Lompat ke Narator: Faiz Bekerja (Index 5)
          },
        ],
      }, // Index 2: Pertengkaran dan Lia Ngambek (Kabur)

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'inactive' }],
        speaker: 'Faiz',
        dialog: '*Kabur-kaburan*',
        choices: [{ text: 'Lanjut', nextScene: 3 }],
      }, // Index 3: Lia Pergi Ngambek

      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-faiz', pos: 'center', status: 'inactive' },
          { id: 'sprite-lia', pos: 'left', status: 'active' },
        ],
        speaker: 'Lia',
        dialog:
          'Kakak kok ga ngelaksanain tugas kakak? *Lia langsung pergi sambil menatap sinis kak Faiz*',
        choices: [{ text: '*Waduh, Gawat ini*', nextScene: 4 }],
      }, // Index 4: NARATOR TRANSISI - Setelah LDKS Selesai (Penyesalan)

      {
        bg: './assets/bg_rumah.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Acara LDKS selesai. Semua sudah pulang. Keesokannya, Faiz merasa khawatir karena Lia marah kepadanya.',
        choices: [{ text: '*Minta maaf*', nextScene: 6 }],
      }, // Index 5: NARATOR TRANSISI - Faiz Bekerja & Aman (Good Track Langsung dari Index 1)

      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Faiz menepati janjinya. Ia menyelesaikan dokumentasi LDKS dari pagi sampai sore dengan pembawaan santai. Lia melihat itu dan tersenyum tipis.',
        choices: [{ text: 'Lanjut.', nextScene: 10 }], // Langsung ke Epilog Good (Index 10)
      }, // Index 6: Minta Maaf via WA (Pilihan Krusial B)

      {
        bg: './assets/bg_rumah.png',
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'active' }],
        speaker: 'Faiz',
        dialog: 'Hmm... minta maaf dulu deh ke Lia di grup.',
        choices: [
          {
            text: 'Minta maaf yang tulus di grup TIK.',
            nextScene: 7,
          },
          {
            text: 'Minta maaf setengah-setengah di grup TIK.',
            nextScene: 8,
          },
        ],
      }, // Index 7: Respon WA - Dimaafkan (Good Ending Track Lanjutan)

      {
        bg: './assets/bg_chat_wa.png',
        sprites: [
          { id: 'sprite-lia', pos: 'left', status: 'active' },
          { id: 'sprite-faiz', pos: 'right', status: 'active' },
        ],
        speaker: 'WA Group TIK',
        dialog:
          "Faiz: 'Maaf ya semuanya, terutama Lia. Kemarin saya males-malesan.'\n\nLia: 'Iya Kak, dimaafin. Jangan diulangi lagi ya, aku kangen Kak Khai sama Kakak-kakak.'",
        choices: [{ text: 'Lanjut.', nextScene: 10 }], // Menuju Epilog Good (Index 10)
      }, // Index 8: Respon WA - Ngambek Berlanjut (Bad Ending Track Lanjutan)

      {
        bg: './assets/bg_chat_wa.png',
        sprites: [
          { id: 'sprite-lia', pos: 'left', status: 'active' },
          { id: 'sprite-faiz', pos: 'right', status: 'active' },
          { id: 'sprite-ajeng', pos: 'center', status: 'active' },
        ],
        speaker: 'WA Chat DM',
        dialog:
          "Faiz: 'Lia, maaf ya kemarin saya males ngerjain tugas saya. Kamunya juga sih Lia, ngambekkan...' \n\nLia: (Read.). \n\nAjeng: 'Lia ngambeknya lama lho, Kak Faiz. Siap-siap aja.'",
        choices: [{ text: 'Lanjut.', nextScene: 9 }], // Menuju Epilog Bad (Index 9)
      },
      // Index 9: Epilog Bad Ending (Ngambek)
      {
        bg: './assets/bg_ruang_osis_malam.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Permintaan maaf yang tidak terbuka membuat Lia ngambek berkepanjangan. Suasana TIK jadi tegang, dan Faiz terus merasa bersalah. Maafnya nggak tahu kapan akan diterima, dan yang lain jadi ikut canggung.',
        isEnding: true,
      },
      // Index 10: Epilog Good Ending (Dimaafkan)
      {
        bg: './assets/bg_ruang_osis_siang.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Konflik selesai. Kak Faiz dan Lia kembali kompak. Faiz kapok ngebuat Lia ngambek, dan bertekad untuk tidak akan pernah ngulangin kesalahan yang sama lagi.',
        isEnding: true,
      },
    ],
  },

  farewellMessages: {
    samy: {
      title: 'Dear Kak Samy,',
      text: 'Ciee... ketua udah demis, abis demis langsung mancing sepuasnya nih ya, wkwk. Makasih banyak ya kak atas semua traktiran dan bimbingannya. Kak Samy baik, ga pelit, walaupun kadang susah dihubungin. Saya kalau liat kak Samy lucu aja ntah kenapa, wkwk.',
    },
    khaila: {
      title: 'Dear Kak Khaila,',
      text: 'Ciee... udah demis, abis demis langsung bobo nih keknya, wkwk. Makasih banyak ya kak atas semua ajaran, nasihat, dan bimbingannya. Kami ngerasa kakak yg paling banyak ngebimbing dan peduli sama kami dari awal sampai akhir. Saya sama kak Khaila kan punya MBTI yg sama yaitu INTP, jadi ntah knp saya selalu ngerasa relate sama beberapa sifat kakak, wkwk.',
    },
    faiz: {
      title: 'Dear Kak Faiz,',
      text: 'Ciee... der Refan udah demis, abis demis langsung ..., wkwk. Makasih banyak ya kak atas semua bimbingannya. Kak Faiz baik, tidak sombong, dan rajin menabung. Saya kalau ngeliat kakak tuh pembawaannya santai trus juga keliatan bisa diandelin, wkwk.',
    },
    default: {
      title: 'Terima Kasih, Kakak-Kakak TIK!',
      text: 'Terima kasih banyak atas semua bimbingan dan ilmu yang telah kalian berikan. Semua kenangan akan selalu kami ingat. Dari kami, Banyu, Lia, Ajeng & Segenap Tim.',
    },
  },
};

// ====== 2. GAME STATE & ELEMEN DOM ======

// State untuk melacak progres game
let currentState = {
  character: null, // 'raka', 'sinta', atau 'indra'
  sceneIndex: 0,
};

// Mengambil elemen-elemen penting dari HTML
const screens = {
  start: document.getElementById('start-screen'),
  game: document.getElementById('game-screen'),
  ending: document.getElementById('ending-screen'),
  farewell: document.getElementById('farewell-screen'),
};

const gameElements = {
  sceneBg: document.getElementById('scene-bg'),
  spriteContainer: document.getElementById('character-sprites'),
  allSprites: document.querySelectorAll('.char-sprite'),
  speakerName: document.getElementById('speaker-name'),
  dialogText: document.getElementById('dialog-text'),
  choicesBox: document.getElementById('choices-box'),
};

const endingElements = {
  title: document.getElementById('ending-title'),
  text: document.getElementById('ending-text'),
  farewellTitle: document.getElementById('farewell-title-char'),
  farewellText: document.getElementById('farewell-text-char'),
};

// ====== 3. FUNGSI-FUNGSI GAME ======

/**
 * Menampilkan layar tertentu dan menyembunyikan yang lain
 * @param {string} screenName - 'start', 'game', 'ending', 'farewell'
 */
function showScreen(screenName) {
  // Sembunyikan semua layar
  for (let key in screens) {
    screens[key].classList.remove('active');
  }
  // Tampilkan layar yang diminta
  screens[screenName].classList.add('active');
}

/**
 * Memulai game untuk karakter yang dipilih
 * @param {string} charId - 'raka', 'sinta', 'indra'
 */
function startGame(charId) {
  currentState.character = charId;
  currentState.sceneIndex = 0;

  console.log(`Memulai cerita untuk: ${charId}`);
  renderScene();
  showScreen('game');
}

/**
 * Menampilkan scene saat ini berdasarkan currentState
 */
function renderScene() {
  const charData = gameData[currentState.character];
  const scene = charData.scenes[currentState.sceneIndex];

  // 1. Update Background
  gameElements.sceneBg.src = scene.bg;

  // 2. Update Sprites (Karakter)
  // Sembunyikan semua sprite dulu
  gameElements.allSprites.forEach((sprite) => {
    sprite.className = 'char-sprite'; // Reset class
  });
  // Tampilkan dan posisikan sprite yang ada di scene ini
  if (scene.sprites) {
    scene.sprites.forEach((spriteData) => {
      const spriteEl = document.getElementById(spriteData.id);
      if (spriteEl) {
        spriteEl.classList.add(spriteData.status); // 'active' or 'inactive'
        spriteEl.classList.add(`pos-${spriteData.pos}`); // 'pos-left', 'pos-center', 'pos-right'
      }
    });
  }

  // 3. Update Dialog Box
  gameElements.speakerName.textContent = scene.speaker;
  gameElements.dialogText.textContent = scene.dialog;

  // 4. Update Pilihan
  gameElements.choicesBox.innerHTML = ''; // Kosongkan pilihan lama

  if (scene.choices) {
    scene.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.className = 'choice-btn';
      button.onclick = () => makeChoice(choice);
      gameElements.choicesBox.appendChild(button);
    });
  } else if (!scene.isEnding) {
    // Jika tidak ada pilihan & bukan ending, buat tombol "Lanjut"
    const button = document.createElement('button');
    button.textContent = 'Lanjut →';
    button.className = 'choice-btn';
    // nextScene: -1 berarti lanjut ke scene berikutnya (index + 1)
    button.onclick = () => makeChoice({ nextScene: -1 });
    gameElements.choicesBox.appendChild(button);
  }
}

/**
 * Dipanggil saat pemain mengklik sebuah pilihan
 * @param {object} choice - Objek pilihan yang diklik
 */
function makeChoice(choice) {
  const charData = gameData[currentState.character];
  const currentScene = charData.scenes[currentState.sceneIndex];

  // 1. Cek apakah ini scene terakhir (PENTING: Cek sebelum menentukan nextScene)
  if (currentScene.isEnding) {
    // Jika scene saat ini adalah Ending, tampilkan layar Ending
    // (Ini menangani klik tombol 'Lanjut' yang muncul di scene ending)
    showEnding(currentScene);
    return;
  }

  // 2. Tentukan scene berikutnya
  let nextIndex;
  if (choice.nextScene === -1) {
    nextIndex = currentState.sceneIndex + 1;
  } else {
    nextIndex = choice.nextScene;
  }

  // 3. Update index state
  currentState.sceneIndex = nextIndex;

  console.log(currentState.character);
  console.log(currentState.sceneIndex);

  // 4. Render scene baru
  if (currentState.sceneIndex < charData.scenes.length) {
    const nextScene = charData.scenes[currentState.sceneIndex];

    // PENTING: Jika scene berikutnya adalah ending, segera tampilkan ending.
    // (Ini menangani transisi dari pilihan krusial ke scene ending)
    if (nextScene.isEnding) {
      showEnding(nextScene);
    } else {
      renderScene();
    }
  } else {
    // Fallback: Jika index melebihi batas, ambil scene terakhir sebagai ending
    showEnding(charData.scenes[charData.scenes.length - 1]);
  }
}

/**
 * Menampilkan layar ending berdasarkan skor
 */
/**
 * Menampilkan layar ending berdasarkan scene terakhir yang dicapai
 * @param {object} endingScene - Objek scene yang memiliki isEnding: true
 */
function showEnding(endingScene) {
  const sceneIndex =
    gameData[currentState.character].scenes.indexOf(endingScene);
  let title = 'Ending';
  let text = endingScene.dialog; // Gunakan dialog dari scene ending sebagai teks utama

  let isGoodEnding = false;
  console.log(endingScene);

  // Menentukan apakah ini Good Ending atau Bad Ending berdasarkan indeks scene
  switch (currentState.character) {
    case 'samy':
      // Good Ending Samy ada di index 9
      isGoodEnding = sceneIndex === 9;
      break;
    case 'khaila':
      // Good Ending Khaila ada di index 12
      isGoodEnding = sceneIndex === 12;
      break;
    case 'faiz':
      // Good Ending Faiz ada di index 10
      isGoodEnding = sceneIndex === 10;
      break;
    default:
      isGoodEnding = false; // Fallback
  }

  // Atur judul dan teks
  if (isGoodEnding) {
    title = 'Good Ending 😇';
    // Tambahkan teks penutup kustom
    text +=
      '<br><br>Kamu berhasil mengambil keputusan yang tepat! Konflik berhasil diselesaikan dengan baik.';
  } else {
    title = 'Bad Ending 😰';
    // Tambahkan teks penutup kustom
    text +=
      '<br><br>Keputusanmu mengarah pada hasil yang kurang baik. Semua ini pelajaran berharga untuk masa depan.';
  }

  endingElements.title.innerHTML = title;
  endingElements.text.innerHTML = text; // Tampilkan dialog scene ending

  showScreen('ending');
}

/**
 * Menampilkan pesan perpisahan spesifik untuk karakter yang dimainkan.
 */
function showFarewell() {
  const charId = currentState.character;
  const messageData =
    gameData.farewellMessages[charId] || gameData.farewellMessages.default;

  // Update konten di layar perpisahan
  endingElements.farewellTitle.textContent = messageData.title;
  // Gunakan innerHTML jika ada <br> yang ingin dirender
  endingElements.farewellText.innerHTML = messageData.text.replace(
    /\n/g,
    '<br>'
  );

  showScreen('farewell');
}

// ====== 4. EVENT LISTENERS (Tombol Menu) ======

// Listener untuk tombol-tombol di Menu Utama
document.querySelectorAll('.char-button').forEach((button) => {
  button.addEventListener('click', () => {
    startGame(button.dataset.char);
  });
});

// Listener untuk tombol-tombol di Layar Ending
document
  .getElementById('show-farewell-btn')
  .addEventListener('click', showFarewell);

document.getElementById('back-to-menu-btn').addEventListener('click', () => {
  showScreen('start');
});

// Listener untuk tombol di Layar Perpisahan
document.getElementById('restart-game-btn').addEventListener('click', () => {
  showScreen('start');
});

// ====== 5. MULAI GAME ======
// Tampilkan menu utama saat halaman dimuat
showScreen('start');
