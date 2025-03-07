# Get Started Order - Track Backend
ก่อนจะ clone project นี้ อย่าลืม run command ใน project นี้

## ภาพรวม
แอปพลิเคชัน backend นี้ถูกสร้างขึ้นโดยใช้ Node.js, Express และ Sequelize สำหรับการจัดการคำสั่งซื้อของผู้ใช้

# npm i
![image](https://github.com/user-attachments/assets/4848128e-74ff-4193-bdde-398a9c5c1074)

# Make sure your database is running 

# Now you can ready run this project

# First of all you have sure to check config flie that correct your database

![Screenshot 2025-03-07 101053](https://github.com/user-attachments/assets/e8adf714-b002-4f54-ac86-d85c92befd32)

# ได้เวลาดูว่า Code แต่ละอันทำอะไรบ้าง

Server.js คือ endpoint ใน project และ ตือ main part to start the server by this command

![image](https://github.com/user-attachments/assets/15a0f781-43c0-420f-aba8-afe17c816a22)

# ถ้าจะเปิดใช้งานใช้ npm start or node server.js

# Project นี้มี 4 main part to run in app folder
 
 - config
 - controllers
 - models
 - routes

![image](https://github.com/user-attachments/assets/39a7c926-a264-4f82-bab9-af6c1d71bdf7)

# config

ไฟล์นี้ประกอบด้วยการตั้งค่าการกำหนดค่าฐานข้อมูล เช่น โฮสต์, ผู้ใช้, รหัสผ่าน, ชื่อฐานข้อมูล และ dialect

![image](https://github.com/user-attachments/assets/da412bda-5547-4ba7-91a3-b450e8a0302b)

# controllers

ไฟล์นี้ประกอบด้วยฟังก์ชันคอนโทรลเลอร์ที่จัดการสำหรับการดำเนินการที่เกี่ยวข้องกับผู้ใช้ รวมถึงฟังก์ชันสำหรับการค้นหาผู้ใช้ทั้งหมด CRUD(Create Read Update Delete)

# Function Read

![image](https://github.com/user-attachments/assets/3b5a9b41-ad3b-4a09-a8ef-e26faa30ae32)

# Function Create 

![image](https://github.com/user-attachments/assets/cd46df5d-eaa6-40c4-a0fb-5eb3456055db)

# Function Read (with id)

![image](https://github.com/user-attachments/assets/67d6fc51-142e-400c-bc4d-607a64183f80)

# Function Update by id 

![image](https://github.com/user-attachments/assets/836492db-dfe4-4c6a-9104-8591f8844b14)

# Function View by id

![image](https://github.com/user-attachments/assets/fb1e6c0c-1452-4ef5-bb43-e5cb337646cb)

# Function Delete by id

![image](https://github.com/user-attachments/assets/051792b3-71d3-4629-8277-4c4f647bcb34)

# models 

ไฟล์นี้กำหนดโมเดลผู้ใช้โดยใช้ Sequelize ระบุโครงสร้างของตารางผู้ใช้ในฐานข้อมูล ใน index.js

![image](https://github.com/user-attachments/assets/6b27e70c-f911-40e7-9f9e-be33aafdba28)

# user.model 

model นี้ประกอบด้วย การ Create table ใน database and match to table

![image](https://github.com/user-attachments/assets/232f21f3-1953-4c3a-95ae-2056e86309bf)

# routes 

ไฟล์นี้กำหนดเส้นทางสำหรับการดำเนินการที่เกี่ยวข้องกับผู้ใช้ เช่น การสร้าง, การอัปเดต, การดู และการลบผู้ใช้ มันแมปคำขอ HTTP ไปยังฟังก์ชันคอนโทรลเลอร์ที่เหมาะสม

  # user.route

  ประกบอไปด้วย route ที่ไป controllers

# server.js

นี่คือจุดเริ่มต้นหลักของแอปพลิเคชัน มันตั้งค่าเซิร์ฟเวอร์ Express, เชื่อมต่อกับฐานข้อมูล และกำหนดเส้นทาง

![image](https://github.com/user-attachments/assets/abf49cca-c58e-4148-9da8-18320bbab99f)

port 5000 which contained by .env config file (it will listen on this port)

it has allow cors to connect frontend project to pass through

use sequelize from models to connect database












