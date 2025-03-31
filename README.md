# EdTech Kurs Boshqaruv API

Bu loyiha **Nest.js** va **Prisma** yordamida yaratilgan EdTech kurs boshqaruv tizimi API'sidir.

## 🚀 Texnologiyalar

- **Nest.js** - Backend ramkasi
- **Prisma** - ORM
- **PostgreSQL** - Ma'lumotlar bazasi
- **TypeScript** - Dasturlash tili

## 📌 O'rnatish

1. Repozitoriyani klonlash:
   ```bash
   git clone <repo-url>
   cd edtech-api
   ```

2. Barcha kerakli paketlarni o'rnating:
   ```bash
   yarn install
   ```

3. `.env` faylini yarating va quyidagilarni qo'shing:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/edtech"
   ```

4. Prisma sxemasini yangilash:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Serverni ishga tushirish:
   ```bash
   yarn start:dev
   ```

## 🛠 API Endpointlar

| Method | Endpoint                      | Tavsif |
|--------|--------------------------------|--------|
| GET    | `/courses`                     | Barcha kurslarni olish |
| POST   | `/courses`                     | Yangi kurs qo'shish |
| GET    | `/students`                    | Barcha talabalarni olish |
| POST   | `/enrollments`                 | Kursga yozilish |
| GET    | `/analytics/popular-courses`   | Eng mashhur kurslar |
| GET    | `/analytics/progress/:userId`  | Foydalanuvchi progressi |
| POST   | `/tests/submit`                | Test natijasini kiritish |
| GET    | `/notifications/reminder/:userId` | Foydalanuvchiga eslatma yuborish |

## 📄 Litsenziya
Ushbu loyiha MIT litsenziyasi asosida tarqatiladi.

## 🔥 Loyihani ishga tushirish

1. **Paketlarni o'rnatish:**
   ```bash
   yarn install
   ```

2. **Ma'lumotlar bazasini sozlash:**
   ```bash
   yarn prisma:g
   ```

3. **Serverni ishga tushirish:**
   ```bash
   yarn start:dev
   ```

4. **API hujjatlarini ko'rish:**
   ```
   http://localhost:3000/api/docs
   ```

