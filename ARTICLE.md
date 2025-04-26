Postda o'zim eng asosiylari deb bilgan 5 ta ORM'ni taqqoslamoqchiman: Prisma, TypeORM, Sequalize, Drizzle va Objection.js. Kyselyni ham qo'shmoqchi edim, lekin u shunchaki query builder bo'lgani uchun uni qo'shmaslikka qaror qildim, lekin u ham yaxshi tool. Quyida turli kategoriyalar bo'yicha o'z fikrlarim bilan bo'lishaman.

## Querying

- Prisma - ✅✅ a'lo darajada! O'zi client library generate qilib beradi va shuni metodlarini ishlatasiz. Query builder yo'q ☹️
- TypeORM - ✅ yaxshi, o'zini model metodlarini ishlatasiz. Query builder bor lekin unchalik ham zo'r deb bo'lmaydi, shaxsan meni asabimni o'ynaydi
- Sequelize - ✅ yaxshi, o'zini model metodlarini ishlatasiz. Query builder yo'q ☹️
- Drizzle - ✅✅ a'lo darajada! Query builder ham bo'r! (batteries included dermidi😄)
- Objection.js - ✅ yaxshi, chunki u Knex.js!

## Type Safety

- Prisma - ✅✅ a'lo darajada!
- TypeORM - ✅ yaxshi va asosan o'zizga bog'liq :)
- Sequelize - ❌ by default support yo'q, [bir amallasa bo'ladi](https://sequelize.org/docs/v6/other-topics/typescript/)
- Drizzle - ✅✅ a'lo darajada!
- Objection.js - ⚠️ [bor](https://github.com/Vincit/objection.js/blob/main/typings/objection/index.d.ts), lekin zo'r emas ☹️

## Schema definition

- Prisma - o'zini `.prisma` faylida yozasiz. Declarative va sodda
- TypeORM - TypeScript decoratorlar bilan entitiy classlar yaratasiz, umuman olganda yaxshi
- Sequelize - object qilib yozasiz, shunchaki norm
- Drizzle - function'lar ko'rinishida yozasiz, menga yoqadi!
- Objection.js - class qilib yozasiz, JSON schema bilan input validation qo'shsa bo'ladi, lekin juda unchalik declarative emas

## Migration support

- Prisma - ✅✅ a'lo darajada! prisma cli tool orqali migratsiya yaratish va yuritish mumkin, yoki dev env uchun shunchaki database bilan sync qilsa bo'ladi, migratsiya querylarni generate qilishi yaxshi
- TypeORM - ⚠️ o'rtacha, cli tool bor lekin unchalik aniq migration querylar generate qilib bermaydi va asosan [buggy](https://github.com/typeorm/typeorm/issues/3280)
- Sequelize - ✅ yaxshi, chidasa bo'ladi
- Drizzle - ✅✅ Prisma!
- Objection.js - ⚠️ Knex orqali qilishgan va migration querylarni o'zingiz yozib chiqishingiz kerak ☹️

## Performance

[Stupid performance testdan](https://github.com/zayniddindev/orm-battle) olgan natijalarim (Insertion time of 100k users):

- Prisma: 2:12.528 (m:ss.mmm)
- TypeORM: 3:24.115 (m:ss.mmm)
- Sequelize: 2:05.304 (m:ss.mmm)
- Drizzle: 👑 1:41.666 (m:ss.mmm)
- Objection.js: 1:53.682 (m:ss.mmm)

## Community & Ecosystem

- Prisma - ✅✅ a'lo darajada!
- TypeORM - ✅ yaxshi, lekin maintenance negadir uncha yaxshimasday oxirgi vaqtlarda ☹️
- Sequelize - ✅ yaxshi, lekin asosan qariyabdi va asta sekinlik bilan undan voz kechishyabdi ☹️
- Drizzle - ✅ tez o'syabdi, lekin baribir nisbatan yosh
- Objection.js - ⚠️ unchalik emas to'g'risi, norm

## Developer experience, a.k.a. DX (or my own experience🙂)

- Prisma - ✅✅ a'lo darajada!
- TypeORM - ✅ yaxshi, lekin yana aytaman, ko'p asab buzadi ☹️
- Sequelize - ⚠️ unchalik zo'r emas to'g'risi, shunga o'zi undan kechishyabdi deb o'ylayman
- Drizzle - ✅✅ a'lo darajada!
- Objection.js - ✅ amallasa bo'ladi :)

## Xulosa

Prisma yoki Drizzle ishlating. The end!

[Original article here](https://dev.to/zayniddindev/nodejs-uchun-orm-tanlaymiz-433)