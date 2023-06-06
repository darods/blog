---
date: 2021-06-16T11:00:59-04:00
description: "Traductor de idiomas para conversaciones entre pasajeros y conductores de taxis con IA"
featured_image: "/images/logo-hackathon-taxis-libres-2021.jpg"
title: "Traductor de idiomas con IA"
---
[Haz clic aquí para ver la demostración](https://drive.google.com/file/d/1ZWoTqNm-t5jpnTXPMjU2eOY9lK2as1qF/view?usp=sharing)

Este proyecto surge como propuesta para la hackathon de la empresa Taxis Libres en el año 2021
en el que se buscaba mejorar la aplicación utilizada por los usuarios para que fuera más atractiva.

La solución que propuso mi equipo fue la integración de la inteligencia artificial de IBM para
hacer traducción de las conversaciones que tienen los pasajeros y conductores en el caso de que hablen distintos idiomas.

## Herramientas utilizadas
* Flutter: desarrollo de una aplicación que recibe audio
* Huawei Mobile Sevices:  Uso de APIs de Huawei para programar aplicación móvil (mapas)
* Node-red: "back end" de la aplicación que recibe audio la aplicación y lo procesa con la API de IBM Cloud
* IBM Cloud: Pasa audio a texto(speech to text), lo traduce y la inteligencia artificial reproduce un audio con el texto traducido (text to speech).

En este proyecto trabajó un grupo interinstitucional de cuatro estudiantes, tres de ingeniería de sistemas, y una estudiante de psicología.

 {{< figure src="/images/app-taxis-libres.png" >}}


