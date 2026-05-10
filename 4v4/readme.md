# FEIstival: 100v100 / 4v4

Toto sú inštrukcie, v ktorom by sa mala nastaviť hra.
(Ja viem, že si všetko pamätáš).

---
1. (pre)Build image (dev-only)
```
make build
```
2. Spustit  
  *(over porty 3000,8000,443, prip. ine beziace docker containery)*:  
```
make run
```
3. V browseri otvorit url:
```
https://localhost:443/
```

4. Zastavit  
```
make stop
```
---
1. Kliknúť HOST
2. Nastaviť:
  - Jazyk: Slovak.
  - Theme: Feistival.
  - Hide Join Info: yes
  - Hide Question On Next Round: yes
3. Nahrať hru: 4v4/4v4.json.
4. Nahrať logo: 4v4/4v4.png.
5. Nahrať qr
6. Zmeniť názvy tímov
7. Otvoriť herné okno.
8.


---
### Pre dev:
Pri vyvijani sw je lepsie spustit projektove `make dev`/`make dev-down` --- taky setup podporujr
hot reload pre zmeny frontend/backend.

### TODOs:
- [x] sk locale
- [x] json otazok
- [x] json themes
- [x] json preklady
    - [ ] final screen replace 'fast money'->'finale'
- [x] logo
- [ ] hudba sfx medzi roundmi (review)
- [x] final round body rozne
    - [x] count final round 1 and 2 per team (2 totals)
    - [x] body timov vo final

- [ ] timer in rounds (5s)
- [ ] klasifikacia slido?
    - [x] qr screen
    - [ ] try out slido
- [x] increase round question size
- [ ] SPEAI logo - better position/size
- [ ] round table bg, font shadows->outline

- [x] try to have one-column table
