// ====== 1. DATA GAME (Database Cerita) ======
// Di sinilah Anda menulis semua cerita, dialog, dan pilihan.

const gameData = {
  // --- Cerita Kak Raka ---
  samy: {
    name: 'Samy',
    scenes: [
      // --- SCENE 0: KONTEKS AWAL (Kabur dari Tugas) ---
      {
        bg: './assets/bg_lapangan.png', // Latar di luar, tapi Samy canggung
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
      },

      // --- SCENE 1: Momen Krusial di WC ---
      {
        bg: './assets/bg_wc.png', // Latar WC
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Samy asik teriak-teriak karena dapat ikan langka di Roblox. Tiba-tiba, Jerry, masuk WC dan bertanya.',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 2, // Meminimalkan kesalahpahaman
          },
        ],
      },
      {
        bg: './assets/bg_wc.png', // Latar WC
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Jery',
        dialog: 'Sam, ngapain lu teriak-teriak?',
        choices: [
          {
            text: 'Jawab dengan suara pelan.',

            nextScene: 3, // Meminimalkan kesalahpahaman
          },
          {
            text: 'Jawab sambil teriak.',

            nextScene: 4, // Memperbesar kesalahpahaman
          },
        ],
      },

      // --- SCENE 2: Suara Pelan (Mendapatkan Keuntungan) ---
      {
        bg: './assets/bg_wc.png',
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Samy',
        dialog: '*Berbisik* Jerry, aku lagi mancing, jangan berisik.',
        choices: [{ text: 'Lanjut', nextScene: 5 }],
      },

      // --- SCENE 3: Suara Keras (Menciptakan Kesalahpahaman) ---
      // 4
      {
        bg: './assets/bg_wc.png',
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Samy',
        dialog:
          'JERRY! Tadi aku dapet ikan langka!!! *Jerry hanya geleng-geleng kepala*.',
        choices: [{ text: 'Lanjut', nextScene: 6 }],
      },

      // --- SCENE 4: Lia Muncul ---
      {
        bg: './assets/bg_wc_luar.png', // Latar luar WC
        sprites: [{ id: 'sprite-lia', pos: 'left', status: 'active' }],
        speaker: 'Lia',
        dialog:
          '*Lia tiba-tiba lewat, mendengar bisik bisik dari dalam WC*. Ada suara kak Samy? Sama siapa? Kok bisik-bisik gitu? *Lia kepo*',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 6, // Momen klarifikasi/gosip
          },
        ],
      },

      // --- SCENE 5: Konfrontasi Lia ---
      // 6
      {
        bg: './assets/bg_wc_luar.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'active' },
          { id: 'sprite-lia', pos: 'left', status: 'active' },
        ],
        speaker: 'Lia',
        dialog:
          'Kak Samy! Kenapa kakak di sini?! Aku denger kakak ngobrol... sama... Jerry? Kakak... lagi ngapain?',
        choices: [
          {
            text: 'Aku... aku lagi main Roblox, Lia.',

            nextScene: 7, // Good Ending Track
          },
          {
            text: '*Kabur*',

            nextScene: 8, // Bad Ending Track
          },
        ],
      },

      // --- SCENE 6: Klarifikasi Berhasil (Good Track) ---
      // 7
      {
        bg: './assets/bg_koridor.png',
        sprites: [
          { id: 'sprite-samy', pos: 'center', status: 'active' },
          { id: 'sprite-lia', pos: 'left', status: 'active' },
        ],
        speaker: 'Lia',
        dialog:
          '*Ketawa kecil* Oohh, main Roblox! Pantesan. Aku kira... *Lia langsung ngakak* Lagian kakak ngapain main roblox di sini. Lanjut dokum lagi sana. Jangan kabur-kaburan terus, nanti diomelin Kak Khaila.',
        choices: [{ text: 'Lanjut', nextScene: 9 }],
      },

      // --- SCENE 7: Kabur & Gosip Menyebar (Bad Track) ---
      // 8
      {
        bg: './assets/bg_koridor.png',
        sprites: [
          { id: 'sprite-lia', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'right', status: 'active' },
        ],
        speaker: 'Lia',
        dialog:
          'Arfa! Arfa! Tadi Samy kabur dari WC, mukanya panik! Jangan-jangan dia lagi ngapa-ngapain sama Jerry! *Lia berbisik sambil cekikikan*',
        choices: [{ text: 'Lanjut', nextScene: 10 }],
      },

      // --- SCENE 8: Epilog Good Ending (Klarifikasi Berhasil) ---
      // 9
      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-samy', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Lia tidak menyebar gosip karena Samy langsung klarifikasi. Samy kembali ke lapangan dan lanjut ngedokum. Gosip aneh berhasil dihindari. TIK tetap aman.',
        isEnding: true,
      },

      // --- SCENE 9: Epilog Bad Ending (Jadi Bahan Candan) ---
      // 10
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-banyu', pos: 'left', status: 'active' },
          { id: 'sprite-ajeng', pos: 'center', status: 'active' },
          { id: 'sprite-khaila', pos: 'right', status: 'active' },
        ],
        speaker: 'Narator',
        dialog:
          "Gosip menyebar cepat di TIK. Setiap Samy muncul, Lia, Banyu, bahkan Ajeng, akan melirik dan tertawa kecil. 'Der Refan' ikut-ikutan nyindir. Samy, yang canggung, hanya bisa tersenyum dan memegang hidung. Ia akan menjadi bahan candaan TIK hingga akhir kepengurusan.",
        isEnding: true,
      },
    ],
  },

  // --- Cerita Kak Sinta (Dummy) ---
  khaila: {
    name: 'Khaila',
    scenes: [
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [],
        speaker: '',
        dialog: 'Di Sabtu siang yang terik di sekolah.',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 1, // Mendapatkan informasi krusial
          },
        ],
      },
      // --- SCENE 0: Persiapan dan Keluhan Mager ---
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Khaila',
        dialog:
          '(Duh, panas banget. Males banget ke lapangan. Mana tuh Samy? Ngilang mulu nih anak.)',
        choices: [
          {
            text: 'Telfon Samy.',

            nextScene: 2, // Mendapatkan informasi krusial
          },
          {
            text: 'Langsung ke lapangan.',

            nextScene: 6, // Langsung ke lapangan tanpa persiapan
          },
        ],
      },

      // --- SCENE 1: Omelin Samy (Good Track) ---
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-samy', pos: 'left', status: 'inactive' }, // Samy hanya dalam dialog
        ],
        speaker: 'Khaila',
        dialog: 'Halo, Sam! Lu di mana?! Ini udah mulai!',
        choices: [
          { text: 'Lanjut', nextScene: 3 }, // Poin karena tahu info tripod
        ],
      },
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-samy', pos: 'left', status: 'inactive' }, // Samy hanya dalam dialog
        ],
        speaker: 'Samy',
        dialog: 'Lagi jajan bentar di bang Memet.',
        choices: [
          { text: 'Lanjut', nextScene: 4 }, // Poin karena tahu info tripod
        ],
      },
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-samy', pos: 'left', status: 'inactive' }, // Samy hanya dalam dialog
        ],
        speaker: 'Khaila',
        dialog: 'Ya udah, cepetan! ini voli ga ada yang dokum.',
        choices: [
          { text: 'Lanjut', nextScene: 5 }, // Poin karena tahu info tripod
        ],
      },
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-samy', pos: 'left', status: 'inactive' }, // Samy hanya dalam dialog
        ],
        speaker: 'Khaila',
        dialog: '*Matiin telepon*',
        choices: [
          { text: 'Lanjut ke lapangan', nextScene: 6 }, // Poin karena tahu info tripod
        ],
      },

      // --- SCENE 2: Langsung Lapangan (Bad Track) ---
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'left', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
        ],
        speaker: 'Khaila',
        dialog: '*Dokum IG Story Futsal Wilhelmina*',
        choices: [
          {
            text: 'Lanjut.',

            nextScene: 7, // Mengabaikan peringatan
          },
        ],
      },
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'left', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
        ],
        speaker: 'Khaila',
        dialog: 'Keknya kejauhan deh...',
        choices: [
          {
            text: 'Maju',

            nextScene: 8, // Poin karena peduli
          },
          {
            text: 'Tetep di tempat.',

            nextScene: 12, // Mengabaikan peringatan
          },
        ],
      },
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'left', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
        ],
        speaker: 'Khaila',
        dialog: '*Maju*',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 9, // Poin karena peduli
          },
        ],
      },
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'left', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
        ],
        speaker: 'Pemain Bola',
        dialog: 'AWAAASSS!!!',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 10, // Poin karena peduli
          },
        ],
      },
      {
        bg: './assets/bg_lapangan.png',
        sprites: [
          { id: 'sprite-khaila', pos: 'center', status: 'active' },
          { id: 'sprite-banyu', pos: 'left', status: 'inactive' },
          { id: 'sprite-lia', pos: 'right', status: 'active' },
        ],
        speaker: '',
        dialog: '*DUAARRRR!!!*',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 11, // Poin karena peduli
          },
        ],
      },
      // --- SCENE 8: Epilog Bad Ending (Kegebok) ---
      {
        bg: './assets/bg_rumahsakit.png', // Ganti background
        sprites: [{ id: 'sprite-khaila', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Khaila yang terkejut terkena gebok di muka sehingga membuat kacamatanya patah dan salah satu matanya memerah, langsung dilarikan ke RS oleh teman-temannya.',
        isEnding: true,
      },
      // --- SCENE 7: Epilog Good Ending (Aman) ---
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

  // --- Cerita Kak Indra (Dummy) ---
  faiz: {
    name: 'Faiz',
    scenes: [
      // --- SCENE 0: KONTEKS AWAL (Narator) ---
      {
        bg: './assets/bg_sekolah_pagi.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Di hari Jumat malam yang meriah, TIK kelas 11 dan Kak Faiz bertugas mendokumentasikan Latihan Dasar Kepemimpinan Siswa (LDKS).',
        choices: [
          {
            text: 'Lanjut',

            nextScene: 1,
          },
        ],
      },

      // --- SCENE 1: Penolakan Tugas (Konfrontasi di tempat) [AWAL BARU] ---
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-faiz', pos: 'center', status: 'active' },
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

            nextScene: 5, // Lompat ke Narator: Faiz Bekerja
          },
        ],
      },

      // --- SCENE 2: Pertengkaran dan Lia Ngambek ---
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-faiz', pos: 'center', status: 'active' },
          { id: 'sprite-lia', pos: 'left', status: 'active' },
        ],
        speaker: 'Kak Faiz',
        dialog: '*Kabur-kaburan*',
        choices: [{ text: 'Lanjut', nextScene: 3 }],
      },

      // --- SCENE 3: Lia Pergi Ngambek ---
      {
        bg: './assets/bg_ruang_osis.png',
        sprites: [
          { id: 'sprite-faiz', pos: 'center', status: 'active' },
          { id: 'sprite-lia', pos: 'left', status: 'inactive' },
        ],
        speaker: 'Lia',
        dialog:
          'Kakak kok ga ngelaksanain tugas kakak? *Lia langsung pergi sambil menatap sinis kak Faiz*',
        choices: [
          {
            text: '*Waduh, Gawat ini*',

            nextScene: 4,
          }, // Narator: Pulang ke rumah
        ],
      },

      // --- SCENE 4: NARATOR TRANSISI - Setelah LDKS Selesai ---
      {
        bg: './assets/bg_rumah.png',
        sprites: [],
        speaker: 'Narator',
        dialog:
          'Acara LDKS selesai. Semua sudah pulang. Keesokannya, Kak Faiz merasa khawatir karena Lia marah kepadanya.',
        choices: [
          { text: '*Minta maaf*', nextScene: 6 }, // Minta maaf via WA
        ],
      },

      // --- SCENE 5: NARATOR TRANSISI - Faiz Bekerja & Aman (Good Track) ---
      {
        bg: './assets/bg_lapangan.png',
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Kak Faiz menepati janjinya. Ia menyelesaikan dokumentasi LDKS dari pagi sampai sore dengan pembawaan santai. Lia melihat itu dan tersenyum tipis.',
        choices: [
          { text: 'Lanjut ke Epilog Good Ending', nextScene: 11 }, // Lompat ke Epilog Langsung
        ],
      },

      // --- SCENE 6: Minta Maaf via WA ---
      {
        bg: './assets/bg_rumah.png',
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'active' }],
        speaker: 'Kak Faiz',
        dialog: 'Hmm... minta maaf dulu deh ke Lia di grup.',
        choices: [
          {
            text: 'Minta maaf yang tulus di grup TIK.',

            nextScene: 7, // Cek respon Lia (Dimaafkan)
          },
          {
            text: 'Minta maaf setengah-setengah di grup TIK.',

            nextScene: 8, // Cek respon Lia (Ngambek)
          },
        ],
      },

      // --- SCENE 7: Respon WA - Dimaafkan (Good Ending Track) ---
      {
        bg: './assets/bg_chat_wa.png', // Background simulasi chat
        sprites: [],
        speaker: 'WA Group TIK',
        dialog:
          "Kak Faiz: 'Maaf ya semuanya, terutama Lia. Kemarin saya males-malesan.'\n\nLia: 'Iya Kak, dimaafin. Jangan diulangi lagi ya, aku kangen Kak Khai sama Kakak-kakak.'",
        choices: [{ text: 'Lanjut.', nextScene: 10 }],
      },

      // --- SCENE 8: Respon WA - Ngambek Berlanjut (Bad Ending Track) ---
      {
        bg: './assets/bg_chat_wa.png', // Background simulasi chat
        sprites: [],
        speaker: 'WA Chat DM',
        dialog:
          "Kak Faiz: 'Lia, maaf ya kemarin saya males ngerjain tugas saya. Kamunya juga sih Lia, ngambekkan...' \n\nLia: (Read.). \n\nAjeng: 'Lia ngambeknya lama lho, Kak Faiz. Siap-siap aja.'",
        choices: [{ text: 'Lanjut.', nextScene: 11 }],
      },

      // --- SCENE 9: Epilog Bad Ending (Ngambek) ---
      {
        bg: './assets/bg_ruang_osis_malam.png', // Suasana dingin
        sprites: [{ id: 'sprite-faiz', pos: 'center', status: 'active' }],
        speaker: 'Narator',
        dialog:
          'Permintaan maaf yang tidak terbuka membuat Lia ngambek berkepanjangan. Suasana TIK jadi tegang, dan Kak Faiz terus merasa bersalah. Maafnya nggak tahu kapan akan diterima, dan yang lain jadi ikut canggung.',
        isEnding: true,
      },

      // --- SCENE 10: Epilog Good Ending (Dimaafkan) ---
      {
        bg: './assets/bg_ruang_osis_siang.png', // Suasana cerah
        sprites: [
          { id: 'sprite-lia', pos: 'left', status: 'active' },
          { id: 'sprite-faiz', pos: 'right', status: 'active' },
        ],
        speaker: 'Narator',
        dialog:
          'Konflik selesai. Kak Faiz dan Lia kembali kompak. Kak Faiz kapok ngebuat Lia ngambek, dan bertekad untuk tidak akan pernah ngulangin kesalahan yang sama lagi.',
        isEnding: true,
      },
    ],
  },
};

// ====== 2. GAME STATE & ELEMEN DOM ======

// State untuk melacak progres game
let currentState = {
  character: null, // 'raka', 'sinta', atau 'indra'
  sceneIndex: 0,
  score: 0,
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
  currentState.score = 0;

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

  // 1. Logika skor dihilangkan
  // if (choice.impact) {
  //   currentState.score += choice.impact;
  //   console.log(`Skor baru: ${currentState.score}`);
  // }

  // 2. Cek apakah ini scene terakhir
  if (currentScene.isEnding) {
    showEnding(currentScene);
    return;
  }

  // 3. Tentukan scene berikutnya (logika tetap)
  if (choice.nextScene === -1) {
    currentState.sceneIndex++;
  } else {
    currentState.sceneIndex = choice.nextScene;
  }

  // 4. Render scene baru
  if (currentState.sceneIndex < charData.scenes.length) {
    renderScene();
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
      '\n\n**Kamu berhasil mengambil keputusan yang tepat!** Konflik berhasil diselesaikan dengan baik.';
  } else {
    title = 'Bad Ending 😰';
    // Tambahkan teks penutup kustom
    text +=
      '\n\n**Keputusanmu mengarah pada hasil yang kurang baik.** Semua ini pelajaran berharga untuk masa depan.';
  }

  endingElements.title.textContent = title;
  endingElements.text.textContent = text; // Tampilkan dialog scene ending

  showScreen('ending');
}

// ====== 4. EVENT LISTENERS (Tombol Menu) ======

// Listener untuk tombol-tombol di Menu Utama
document.querySelectorAll('.char-button').forEach((button) => {
  button.addEventListener('click', () => {
    startGame(button.dataset.char);
  });
});

// Listener untuk tombol-tombol di Layar Ending
document.getElementById('show-farewell-btn').addEventListener('click', () => {
  showScreen('farewell');
});

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
