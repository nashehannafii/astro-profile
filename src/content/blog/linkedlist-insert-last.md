---
author: Nasheh Annafii
pubDatetime: 2024-06-12T21:22:00Z
modDatetime: 2024-06-12T23:12:47.400Z
title: LinkedList [02. Insert Last]
slug: linkedlist-insert-last
featured: true
draft: false
tags:
  - cpp
  - alpro
description:
  Implementasi Insert Last LinkedList menggunakan
  C++.
---


## Table of contents

## LinkedList

LinkedList adalah struktur data linear di mana setiap elemen disebut node, dan setiap node memiliki dua bagian: data dan referensi ke node berikutnya dalam urutan.

## Insert First

Fungsi insertFirst pada LinkedList digunakan untuk memasukkan elemen baru ke awal LinkedList. Langkah-langkahnya adalah:

1. Buat node baru dengan nilai yang ingin dimasukkan.
2. Atur referensi node baru untuk menunjuk ke node yang saat ini berada di awal LinkedList.
3. Atur head (kepala) LinkedList untuk menunjuk ke node baru yang baru saja dibuat.

Dengan melakukan langkah-langkah ini, elemen baru berhasil dimasukkan ke awal LinkedList, dan elemen-elemen yang sebelumnya ada dipindahkan ke posisi setelahnya.

## Import Library

```ts
#include <iostream>
```

Baris ini menyertakan file header iostream. File ini menyediakan fungsi-fungsi untuk operasi input dan output dalam C++. Ini diperlukan untuk menggunakan std::cout untuk mencetak ke konsol.

## Node

```ts
struct Node {
    int data;
    Node* next;
};
```

Baris ini mendefinisikan struktur kustom bernama Node. Ini berfungsi sebagai blok penyusun untuk elemen linked list.

1. int data: Variabel anggota ini di dalam struktur Node menyimpan nilai data aktual yang akan disimpan oleh setiap node dalam linked list.
2. Node* next: Variabel anggota ini adalah pointer yang menunjuk ke node berikutnya dalam linked list. Ini memungkinkan node untuk dihubungkan bersama, membentuk struktur seperti rantai pada linked list.

## Insert Last

```ts
void insertLast(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    Node* last = *head_ref;

    new_node->data = new_data;
    new_node->next = nullptr;

    if (*head_ref == nullptr) {
        *head_ref = new_node;
        return;
    }

    while (last->next != nullptr) {
        last = last->next;
    }

    last->next = new_node;
}
```

Fungsi ini menambahkan node baru dengan nilai data tertentu (new_data) ke akhir linked list. Ia mengambil dua argumen:

1. Node** head_ref: Ini adalah pointer ganda yang menunjuk ke head (kepala) dari linked list. Penggunaan pointer ganda memungkinkan fungsi untuk memodifikasi pointer head itu sendiri jika perlu.
2. int new_data: Ini adalah nilai integer yang akan disimpan dalam member data node baru.

Berikut rincian langkah-langkah fungsi:

1. Node* new_node = new Node(): Membuat objek Node baru secara dinamis menggunakan new dan menetapkannya ke pointer new_node.
2. Node* last = *head_ref: Membuat pointer last dan menginisialisasinya dengan nilai current dari pointer head. Ini akan digunakan untuk melintasi list untuk menemukan node terakhir.
3. new_node->data = new_data;: Mengatur member data dari node yang baru dibuat new_node ke nilai new_data yang disediakan.
4. new_node->next = nullptr;: Mengatur pointer next dari node baru ke nullptr karena ini akan menjadi node terakhir pada awalnya.
5. if (*head_ref == nullptr): Memeriksa apakah linked list kosong (yaitu, head adalah nullptr).
 - *head_ref = new_node;: Jika list kosong, ini mengatur pointer head untuk menunjuk ke node yang baru dibuat, menjadikannya node pertama dan terakhir.
 - return;: Keluar dari fungsi karena tidak ada lagi yang perlu dilakukan dalam kasus ini.
6. while (last->next != nullptr): Loop ini berulang hingga mencapai node terakhir dalam list.
7. last = last->next;: Memindahkan pointer last ke node berikutnya dalam list.
8. last->next = new_node;: Setelah loop selesai, last menunjuk ke node terakhir. Baris ini mengatur pointer next dari node terakhir untuk menunjuk ke new_node yang baru dibuat, secara efektif menambahkannya ke akhir list.

## Print LinkedList
```ts
void printLinkedListWithAddress(Node* head) {
    Node* current = head;
    while (current != nullptr) {
        std::cout << "Alamat: " << current
                  << " - Data: " << current->data 
                  << " - Alamat Next: " << current->next << std::endl;
        current = current->next;
    }
}
```
Fungsi printLinkedListWithAddress ini bertugas untuk mencetak isi dari linked list, beserta alamat memori dari setiap node.

Penjelasan langkah demi langkah:

1. Node* current = head;: Baris ini membuat pointer current dan menginisialisasinya dengan nilai pointer head. Pointer current akan digunakan untuk beriterasi melalui linked list.

2. while (current != nullptr): Loop while ini akan berulang selama current tidak menunjuk ke nullptr (null). Artinya, loop akan terus berjalan selama current masih menunjuk ke node yang valid di dalam linked list.

3. std::cout << "Alamat: " << current << " - Data: " << current->data << " - Alamat Next: " << current->next << std::endl;: Baris ini mencetak informasi terkait node yang sedang ditunjuk oleh current.
 - "Alamat: " << current**: Mencetak label "Alamat:" diikuti dengan alamat memori dari node tersebut.
 - " - Data: " << current->data**: Mencetak label " - Data:" diikuti dengan nilai data yang disimpan di dalam node tersebut. Akses ke data dilakukan dengan menggunakan operator -> untuk mengakses member data dari struktur Node yang ditunjuk oleh current.
 - " - Alamat Next: " << current->next**: Mencetak label " - Alamat Next:" diikuti dengan alamat memori dari node berikutnya yang ditunjuk oleh member next dari struktur Node yang sedang ditunjuk oleh current.

4. current = current->next;: Baris ini memperbarui pointer current untuk menunjuk ke node berikutnya di dalam linked list. Ini dilakukan dengan mengakses member next dari struktur Node yang sedang ditunjuk oleh current.

5. std::endl;: Baris ini menambahkan newline character (\n) ke output, sehingga informasi dari setiap node dicetak pada baris yang berbeda.

Dengan loop while dan pembaruan pointer current, fungsi ini akan terus mencetak informasi dari setiap node hingga mencapai node terakhir, yang ditandai dengan member next bernilai nullptr. Ini akan memberikan gambaran lengkap tentang isi linked list, beserta alamat memori dari setiap node-nya.


## Main
```ts
int main() {
    Node* head = nullptr;

    insertLast(&head, 3);
    insertLast(&head, 5);
    insertLast(&head, 7);

    std::cout << "Linked List : " << std::endl;
    printLinkedListWithAddress(head);

    return 0;
}
```

## Hasil Compile
```ts
Linked List : 
Alamat: 0x194beb0 - Data: 3 - Alamat Next: 0x194bed0
Alamat: 0x194bed0 - Data: 5 - Alamat Next: 0x194bef0
Alamat: 0x194bef0 - Data: 7 - Alamat Next: 0



=== Code Execution Successful ===
```


## Note
Saya membuat kode ini setelah mempelajari materi dari [YouTube](https://youtu.be/e9qepcyU6z8?si=hDoJ-C5D5E0DNm_I) serta mencari informasi dari beberapa sumber di internet. Saya membuat kode menggunakan compiler online yaitu [Programiz](https://www.programiz.com/cpp-programming/online-compiler/).

> keep on track.
