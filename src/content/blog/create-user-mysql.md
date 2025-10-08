---
author: Nasheh Annafii
pubDatetime: 2024-06-11T21:22:00Z
modDatetime: 2024-06-11T23:12:47.400Z
title: Create User MySql
slug: create-user-mysql
featured: true
draft: false
tags:
  - mysql
  - tutorial
description: How to create user on MySql? Tutorial creating user on
  MySql.
---

## Table of contents

## MySql

Pastikan anda sudah menginstall [MySql](/posts/install-mysql)!

## Create user MySql

Berikut adalah langkah-langkah untuk membuat pengguna (user) baru di MySQL:

1. Login ke MySQL:

   Buka terminal atau command prompt dan login ke MySQL menggunakan akun root atau akun yang memiliki hak akses yang diperlukan.

   ```ts
   mysql -u root -p
   ```

2. Buat User Baru:

   Gunakan perintah CREATE USER untuk membuat user baru. Gantilah username dan password dengan nama pengguna dan kata sandi yang Anda inginkan.

   ```ts
   CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
   ```

3. Berikan Hak Akses (Privileges):

   Gunakan perintah GRANT untuk memberikan hak akses kepada user baru tersebut. Misalnya, untuk memberikan semua hak akses pada database tertentu:

   ```ts
   GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
   ```

<!-- 4. Jika Anda ingin memberikan hak akses hanya pada beberapa perintah, Anda bisa spesifik:

    ```ts
    GRANT SELECT, INSERT, UPDATE, DELETE ON database_name.* TO 'username'@'localhost'; -->

4. Terapkan Perubahan:

   Setelah memberikan hak akses, jalankan perintah FLUSH PRIVILEGES untuk memastikan bahwa perubahan diterapkan.

   ```ts
   FLUSH PRIVILEGES;
   ```

5. Verifikasi User Baru:

   Anda bisa memverifikasi apakah user baru telah dibuat dan hak aksesnya telah diberikan dengan benar menggunakan perintah berikut:

   ```ts
   SELECT user, host FROM mysql.user;
   ```

6. Keluar dari MySQL:

   Setelah selesai, Anda bisa keluar dari MySQL dengan perintah:

   ```ts
   EXIT;
   ```

Dengan mengikuti langkah-langkah di atas, Anda seharusnya dapat membuat user baru di MySQL dan memberikan hak akses yang sesuai.

## Note

Pastikan anda sudah menginstall [Mysql](/posts/install-mysql)
