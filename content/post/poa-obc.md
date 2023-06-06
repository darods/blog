---
date: 2021-03-19T11:00:59-04:00
description: "Segunda Computadora de vuelo para cohete modelo POA"
#featured_image: "/images/OBCv2.jpg"
title: "Computadora de vuelo cohete V2"
---

# Computadora de vuelo (OBC) Pillar of Autumn (POA) V2 

El proposito de este proyecto es proveer el conocimiento y el código de la construcción de
una computadora de vuelo (OBC) para un cohete modelo amateur con fines de invetigación cientifica.


El código de arduino se encuentra en el directorio *OBC*, y está dividido en subarchivos para cada caso de uso. Para usarlo tienes que compilar el archivo **OBC.ino**.

## ¿Qué es lo que hace?
En un data logger sencillo que almacena la información de los sensores en un archivo CSV para
su posterior análisis. También activa un servo motor que libera el mecanismo de recuperación cuanto detecta que el cohete está en caida libre.

{{< figure src="/images/OBCv2.jpg" >}}

*POA es el acronimo de "Pillar Of Autumn", la nave espacial mas genial de Halo Reach*

## ¿Como almacena la información?
El méotdo para almacenar la información se encuentra en el carchivo *logData.ino*. El orden en que almacena los datos es: 

1. logTime: Tiempo que ha pasado desde que fue encendida
2. Altitud relativa
3. Estado de caída libre: 0 o 1
4. temperatura BMP280
5. Presión
6. Pitch
7. Roll
8. Yaw
9. Aceleración X 
10. Aceleración Y
11. Aceleración Z


### Librerías
Para correr este proyecto, necesitas descargar las siguientes librerías para Arduino:
* [SdFat](https://github.com/greiman/SdFat) - por Bill Greiman
* [MPU6050](https://github.com/jarzebski/Arduino-MPU6050) - por Korneliusz Jarzebski (Versión mejorada [aquí](https://github.com/el-NASA/Arduino-MPU6050))
* [BMP280](https://github.com/adafruit/Adafruit_BMP280_Library) - por Adafruit (Si usas una versión china debes cambiar la dirección I2C de 0x77 a 0x76)

## Esquematico y diseño PCB
La **OBC** usa los sensores MPU6050 y BMP280, junto a modulos microSD y un buzzer para dar alertas. También tiene la capacidad de conectar un servo motor para activar el mecanismo de recuperación cuando esté en caida libre.

{{< figure src="/images/schematic-poa-v2.png" >}}
{{< figure src="/images/pcb-obc-poa-v2.png" >}}

Espero que la información en este post sea un buen punto de partica para tu proyecto de ciencia y tecnología. Sientete libre de hacer algún aporte al desarrollo. 


## Referencias
* Calamac Projects (2015). “Arduino Rocket Data Logger”. Instructables.com. Recuperado de: https://www.instructables.com/id/Arduino-Rocket-Data-Logger
* Boyarizo E. y Méndez C. (2017). Diseño y construcción de un microsatélite(CanSat). IES El Burgo de Las Rozas.
* Day B., Lumpkin T., Huegele V., Pierce C. (Sin fecha). “Basics of rocketry”. Huntsville Area Rocketry Assiciation (HARA).
* Newton M. (2012). Rocket Anatomy 101. NAR.
* Orlando J. (2012). “Estudio de la trayectoria de un cohete de tres etapas lanzado desde el territorio colombiano”. Universidad Nacional de Colombia, Bogotá. Pag. 80-81.
* T. Benson (2014). Brief History of Rockets. NASA. Recuperado de : https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html
* Van Milligan T. (2009) “Make a rocket payload bay”. Apogee Rockets. Recuperado de : https://www.youtube.com/watch?v=_ctUCO8GsJ4&index=30&list=PLnX-NFLCOOVkq82xIrfm6KuaVoljTCtob
* Van Milligan T. (Sin fecha). “Pressure Relief Holes”. Apogee preak of flight newsletter, issue 68.


### Bibliografía
* Álvarez N., Huérfano R., Ojeda O., (2015) “Diseño e implementación de misión para el lanzamiento de un cohete para tres kilómetros de altura”. Universidad Nacional de Colombia, Bogotá.
* Esero (sin fecha). “2018 UK Cansat Competition Guidelines”. Esero. Pag. 9-10.
* European Space Agency(ESA) (2018). “CanSat Guidelines 2018-109”. ESA.
* Ojeda O. (2016) “The Aerospace development and research group of the Universidad Nacional de Colombia, GIDA-UN. A tool for aerospace education in Colombia”. 67 th International Astronautical Congress (IAC). México, Guadalajara.
* Ricardo P. (2018). “Reto de innovación IEEE 2018 – CanSat para la paz”. Universidad Distrital. Bogotá. Recuperado de : https://ieee.udistrital.edu.co/ieee-innovation-2018/
