# FEIstival: 100v100 / 4v4

Toto sú inštrukcie, v ktorom by sa mala nastaviť hra.
(Ja viem, že si všetko pamätáš).

---
0. Build image (dev-only)  
```
docker build -t 4v4:latest -f Dockerfile.allinone .
```

---
1. Spustit  
  *(over porty 3000,8000,443, prip. ine beziace docker containery)*:  
```
docker run -p 443:443 -ti 4v4:latest
```
2. V browseri otvorit url:
https://localhost:443/

3. Skryt tool icon v dole vlavo v hernom okne: preferences->hide

---
1. Kliknúť HOST
2. Nastaviť jazyk na Slovak.
3. Nastaviť Theme na Feistival.
4. Nahrať hru: 4v4/4v4.json.
5. Nahrať logo: 4v4/4v4.png.
6. Zmeniť názvy tímov na: **TODO**
7. Nastaviť názov finálového kola.
8. Otvoriť herné okno.

---
### TODOs:
- [x] sk locale
- [x] json otazok
- [x] json themes
- [x] json preklady
    - [ ] final screen - fast money?
- [x] logo
- [ ] qr kod
- [ ] hudba sfx medzi roundmi (review)
- [ ] final round body rozne
    - [x] count final round 1 and 2 per team (2 totals)
    - [ ] body timov vo final

- [ ] timer?
- [ ] klasifikacia slido?
