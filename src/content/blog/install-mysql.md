---
author: Nasheh Annafii
pubDatetime: 2024-06-11T21:22:00Z
modDatetime: 2024-06-11T23:12:47.400Z
title: Install MySql
slug: install-mysqli
featured: true
draft: false
tags:
  - mysql
  - tutorial
description:
  How to install MySql? Tutorial install 
  MySql.
---


## Table of contents

## Windows

Untuk sistem operasi windows bisa melakukan installasi menggunakan [Laragon](https://laragon.org/download/) atau [XAMPP](https://www.apachefriends.org/download.html).

## MacOs

Untuk sistem operasi windows bisa melakukan installasi menggunakan [XAMPP](https://www.apachefriends.org/download.html) atau menggunakan [Homebrew](https://formulae.brew.sh/formula/mysql).

## Ubuntu

Untuk menginstall MySQL di Ubuntu, ikuti langkah-langkah berikut:

1. Update Daftar Paket:

    Sebelum menginstal perangkat lunak baru, disarankan untuk memperbarui daftar paket agar mendapatkan versi terbaru.

    ```ts
    sudo apt update
    ```

2. Install MySQL Server:
    
    Instal paket MySQL Server menggunakan apt.

    ```ts
    sudo apt install mysql-server
    ```

3. Verifikasi Instalasi MySQL:
    
    Untuk memastikan MySQL berjalan dengan baik, periksa status layanan MySQL.

    ```ts
    sudo systemctl status mysql
    ```

Anda seharusnya melihat pesan yang menunjukkan bahwa MySQL aktif dan berjalan.

4. Login ke MySQL:

    Setelah menginstal dan mengamankan MySQL, Anda bisa login ke MySQL menggunakan akun root.


    ```ts
    sudo mysql -u root -p
    ```

Masukkan kata sandi yang telah Anda atur selama proses keamanan.

Dengan mengikuti langkah-langkah di atas, Anda seharusnya dapat menginstal dan mengkonfigurasi MySQL di Ubuntu dengan benar.