# QAE-Take-Home-Test

**Link Screen Record hasil testing automated**
```bash
https://drive.google.com/drive/folders/1eL6FzwJLp7w-Vlj6epKTsEztdp5AGLKh?usp=sharing
```

**Pengujian Otomatis Pembuatan Pengguna API**

Proyek ini bertujuan untuk melakukan pengujian otomatis terhadap API Pembuatan Pengguna menggunakan Playwright untuk pengujian UI dan Axios untuk pengujian API.

## Instruksi Persiapan

1.  **Clone Repository**

    ```bash
    git clone https://github.com/usernameAnda/automated-testing.git
    ```

2.  **Open Folder**

    ```bash
    jika, sudah melalukan git clone. tahap selanjutnya, membuka file nya dengan klik kanan lalu buka Terminal dan ketik "code ."
    ```

3.  **Install Dependencies**

    ```bash
    npm install
    ```

4.  **Set Environment Variables**

    Buat file .env di direktori utama. Tambahkan variabel berikut ke file .env :

    ```bash
    url=https://gorest.co.in/public-api/users
    access_token =token_akses_anda_di_sini
    ```

3.  **Run the Test**

    ```bash
    npx playwright test (nama file) --headed
    ```

## Hasil Pengujian

**Kasus Positif :**

```bash
1. Membuat pengguna baru dengan sukses.
2. Memvalidasi data respons terhadap input yang diberikan.
```

**Kasus Negatif :**

```bash
1. Mengatasi skenario token tidak valid dengan tepat.
2. Memvalidasi respons error saat mencoba membuat pengguna dengan email yang sudah ada.
```