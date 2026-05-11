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
- [ ] hudba sfx medzi roundmi (review)
- [x] final round body rozne
    - [x] count final round 1 and 2 per team (2 totals)
    - [x] body timov vo final

- [ ] timer in rounds (5s)
- [x] klasifikacia slido?
    - [x] qr screen
    - [x] try out slido -> menti
- [x] increase round question size
- [ ] SPEAI logo - better position/size
- [ ] round table bg, font shadows->outline

- [x] try to have one-column table
- [ ] put team names in a row (separate div)
- [ ] ba-dum-tss sound effect
- [ ] show current question along with qr (
- [ ] make intro sound shorter max10s
- [ ] fialove ot
- [ ] opravit casovac - it just restarts on timeout
- [ ] select right music for 2nd person in FInal round (music must not have
  pauses, must be loud, fast+loud starts/endings, circa 10min in total)

## Jolik pre FF

### [mentimeter app](https://www.mentimeter.com/app/home)

See it as a presentation app with real-time polling

- QR Code sa da stiahnut cez tl.Share hore vlavo.
- AI Grouping sa zapina od >10 odpovedi
- Otazky su samotne slides. Aby menit otazky, **musi byt zapnuta prezentacia :/**
- Max 50 ludi, ale da sa to 1. prekrocit, co asi zneuzijeme pre feistival. Inac
  sa da kupit plan za 15eur, see [pricing](https://www.mentimeter.com/plans/education)
- je treba predpripravit asi 10 open-ended slideov


### TODOs:
- [ ] add inter-slides with some text like "get ready..."
