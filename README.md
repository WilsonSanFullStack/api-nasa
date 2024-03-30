# Fron-End Api-Rest NASA
usamos la api-rest de la nasa para elavorar 2 puntos de entrada
de los cuales tomamos informacion.

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Puntos De Entrada
haciendo uso del fetch traemos informacion actualizada y directa de la nasa
### Imagen del dia
ejemplo de la query
```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```
con esta query obtenemos la imagen del dia y una explicacion de la imagen

### Objetos
ejemplo de la query
```
https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
```
con esta query obtenemos todos los objetos que estan cerca de la tierra para el dia que desee buscar en nuestro caso mostramos los objetos circundantes para el dia transcurrido o trancurriendo

para mas informacion consultar <a href='https://api.nasa.gov/'>Api-Rest</a>
