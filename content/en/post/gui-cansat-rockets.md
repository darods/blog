---
date: 2020-03-08T10:58:08-04:00
description: "Graphical interface for viewing data sent in real time
by picosatellite flight computers or model rockets."
featured_image: "/images/gui-cansat-cohete.png"
title: "Graphical interface for viewing data sent in real time
by picosatellite flight computers or model rockets."
---

[Click here to see the repository](https://github.com/el-NASA/CanSat-Ground-station)
# GUI Ground station for CanSat or OBC's
GUI code for a ground station for CanSats and/or OBCs where data from different sensors is displayed in real time. **No sensors are needed to test it**.

![image](https://i.imgur.com/zDY3DnY.gif)

## Table of Contents
* [Support](#support)
* [General information](#general-information)
* [Liberias](#libraries)
* [Linux Configuration](#linux-configuration)
* [Windows Settings](#windows-settings)
* [How does it work?](#how-it-works)
* [Sources](#sources)
* [License](#license)
___
## Support
If you used this project or learned something, please share it or give it a star on github to continue making open source projects.
___

## General information
The purpose of this project is to make a GUI in which the data transmitted by an OBC (on-board computer) or a CanSat is understandable at first glance through a text string on a serial port.

This project is strongly related to
another [rocket science and CanSat project](https://github.com/el-NASA/POA). **It is still in development.**

### Bugs
* Most of the time the text elements disappear, I invite you to solve this.

* Sometimes it can't convert the first value of the list to int, but it solves itself by re-running it.

* speed graph is under development, it grows to infinity.
___
## Libraries
El proyecto se crea con:
* numpy==1.18.2
* PyQt5==5.14.2
* PyQt5-sip==12.7.2
* pyqtgraph==0.10.0
* pyserial==3.4

___
## Linux configuration
In order to run it you have to open the terminal in the folder and type:
```
$ virtualenv env
$ fuente env/bin/activate
$ pip3 install -r requiments.txt
$ python3 main.py
```
If you don't have the electronics you can still try it! When the terminal asks you to type a serial port, type anything and it will work, it will graph random data (but the text error remains).
___

## Windows Configuration
Open CMD or PowerShell to the folder address and type the following commands:
```
> virutalenv env
> \env\Scripts\activate.bat
> pip install -r requeriments.txt
> python main.py

```
## How does it work?
### How do you take the samples?
Every 500ms it takes a sample, this number comes from the data rate the Arduino has, **if you don't have the Arduino and sensors the GUI still works, it plots random data**. The loop is:
```
timer = pg.QtCore.QTimer()
timer.timeout.connect(update)
timer.start(500)
```

### What values does it use?
The `update()` function updates the graphics and text of the interface. The first thing it does is get a list of the data to be updated, this list is annotated as a `value_chain`.

Then, inside `update` the specific *update* methods are executed for each element that depends on this list.

The values it receives are:
0. Registration time
1. Relative height
2. It is in free fall (0 or 1)
3. Temperature
4. Atmospheric pressure
5.Pitch
6. Wheel
7.Yaw
8. Acceleration in X
9. Y axis acceleration
10. Z-acceleration



### How do you store the information?
Clicking the **Start storage** button calls a function of the **data_base** class that changes a state that determines whether the `save` method writes the data to the list. The same goes for the **Stop storage** button.

In this file the list called `value_chain` is stored in the same order by adding at the end the date that is recorded in the computer.

___
## Sources
"If I have seen further than others, it is by standing on the shoulders of giants." – Newton mocking Hooke's back.
* Hrisko, J. (2018). [Python Datalogger - Usando pySerial para leer la salida de datos en serie de Arduino.](https://bit.ly/2wQvByM)
* Sepúlveda, S. Reyes, P. Weinstein, A. (2015). [Visualización de señales fisiológicas en tiempo real](https://bit.ly/2XIRzyw). doi: 10.25080/Majora-7b98e3ed-01c
* Golubev, P. (2018). [Ejecutar pyqtgraph en tiempo real en PlotWidget GUI.](https://bit.ly/2VeXSIv)
* Pythonspot.(n.d.). [PyQt5.](https://pythonspot.com/pyqt5/)
* [Sr. Tom](https://bit.ly/3amndEZ). (2016). [Calcular la velocidad en el acelerómetro](https://bit.ly/3acX3nP).
* Selfert, K. Camacho, O. (2007). [Implementar algoritmos de posicionamiento usando acelerómetros](https://bit.ly/2REEH8X). Freescale Semiconductor.
* Muchas otras personas frías en el desbordamiento de la pila.
___
# License
It's [MIT](https://github.com/el-NASA/Estacion-Terrena/blob/master/LICENSE) <3. (for now)

Developed by Daniel Alejandro Rodríguez Suárez, leader of the ATL research seedbed, linked to the LIDER research group of the District University.
