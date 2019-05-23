# Divisas

Cotización de divisas backend python y front react native

## Comenzando 🚀

Descargar el repositorio hay dos carpeta una servicio, que es donde se aloja el codigo de python y la otra divisasApp 
que es donde se aloja el codigo en React Native de la App para Android e IOS

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Necesitas tener py para instalar las instancias del archivo requirements.py necesarios para correr el servicio, 
asi como NodeJS NPM y react native para ejecutar la App, ademas de un emulador de android o de IOS dependiendo donde
quiera correr la APP


### Instalación 🔧

1. En la carpeta servicio, en el archivo app.py agregue la key de la API de cambio.today

```
keyCambio= 'XXXXXX'
```
2. En la carpeta divisasAPP en el archivo componentes/home.js en la function getDivisa() inserta la IP de su maquina
para que la app se conecte a la API corriendo en local.

```
let Ip= 'http://192.XXX.X.X';
```


## Deployment 📦

1. Cuando tenga el proyecto en el local y las dependencias instaladas, ejecute inicialmente la API alojada en la carpeta 
servicio

```
python app.py
```
2. Corra la app parandose en la carpeta divisasAPP y en la consola corriendo

```
react-native run-android
```
o

```
react-native run-ios
```

## Autores ✒️

* **Andrés Felipe Ceballos** - *Prueba Divisas* - [andresceballosm](https://github.com/andresceballosm)

---
⌨️ con ❤️ por [andresceballosm](https://github.com/andresceballosm) 😊
