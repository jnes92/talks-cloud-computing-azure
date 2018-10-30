##### 2.6 Deployment : Zero-Downtime

> 
Probleme beim Deployment:

- Server kurzzeitig nicht verfügbar
- Neuer Code könnte neue Bugs verursachen
- Tests beim Buildvorgang helfen
- manche Apps benötigen *Warmup*

>

Vorgehen

- App Services verfügen über Slots
- Bspw. für Production, Staging, Develop
- Deploy Slot B -> Test B -> Swap A & B
- Falls notwendig: Warmup auf Slot B vor Swap


<!-- warmup: (fill cache with data)  -->
