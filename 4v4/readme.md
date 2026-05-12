# FEIstival: 100v100 / 4v4

Readme je rozdelene na sekcie poldla veci pripravovanych pre 4v4.

## Friendly Feud SW

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

### NOTES
- X-ka sa nerataju v pre-kole
- Final round - 1. write open-ended answer 2. select points 3. show oe answer 3.
  add points
- 

- Alt prompts:
  - Čo ti na FEI-ke najviac chýba?
  - Čo spravíš ako úplne prvé, keď vyjdeš zo skúšky?

---
### Pre dev:
Pri vyvijani sw je lepsie spustit projektove `make dev`/`make dev-down` --- taky setup podporujr
hot reload pre zmeny frontend/backend.

### TODOs:
- [x] sk locale
- [x] json otazok
- [x] json themes
- [x] json preklady
    - [x] final screen replace 'fast money'->'finale'
- [x] logo
- [x] hudba sfx medzi roundmi (review)
- [x] final round body rozne
    - [x] count final round 1 and 2 per team (2 totals)
    - [x] body timov vo final

- [ ] timer in rounds (5s)
- [x] klasifikacia slido?
    - [x] qr screen
    - [x] try out slido -> menti
- [x] increase round question size
- [ ] SPEAI logo

- [x] try to have one-column table
- [x] put team names in a row (separate div)
- [ ] ba-dum-tss sound effect
- [x] show current question along with qr
- [x] make intro sound shorter max10s -> added alt. song
- [x] opravit casovac - it just restarts on timeout -> changed song to wrong
- [x] show totals
- [x] center qr
- [x] do not restart short music. reset on stop

## Jolik pre FF

### -> Slido


