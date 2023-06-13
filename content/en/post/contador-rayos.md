---
date: 2021-10-20T11:00:59-04:00
description: "Artificial intelligence algorithms to count how many thunderstorm lightning bolts are in images"
featured_image: "/images/conteo-rayos.png"
title: "Lightning counter in images"
---
 
# lightning counter
It counts how many lightning strikes there are in thunderstorm images using two types of algorithms, convolutional neural networks and a fuzzy logic algorithm optimized with a genetic algorithm technique.
 
[Click here to go to the repository](https://github.com/el-NASA/Lightning-strike-counter)
 
[Click here to see the scientific article](https://drive.google.com/file/d/1xOWFqhOgekYZE1OFdEhqHSoKVb84uHFN/view?usp=sharing)
 
[Click here to see the poster](https://drive.google.com/file/d/1wCYDjgi48IDLjk8ELvhUZq0b6t2U8rUf/view?usp=sharing)
 
 
## What is it for?
Electrical storms are one of the most devastating natural phenomena that exist, every year millions of dollars are lost in repairing the damage caused by lightning in the areas where it strikes, either due to loss of equipment, infrastructure or the same damage to nature that are required to be mitigated, as is the case of forest fires.
 
The purpose of this lightning counter is to be implemented in an IoT device that captures photos of electrical storms, so that it is able to determine the number of lightning strikes at a certain time, and thus serve as a complement to meteorological solutions already in place. use.
 
## What kind of images do you evaluate?
The input is binary images 150x150 px in size. To obtain the data set, images from the internet were passed through a processing that turned them into binary images and then segments of the specified size are cut to pass them through the lightning counters that use fuzzy logic or RNN.

* `imgOriginal`: Set of original images.
* `imgOriginalBinary`: Array of binary images.
* `imgBinary`: Array of 150x150 px binary images.
 
## How does it work?
 
### Image processing
The image processing algorithm consists of taking as input some of the images from the `imgOriginal` folder, changing it to grayscale, then to binary, and passing it through two hole fills. The code for this is in the `generateBinaryImage.m` file.
 
### Option 1: Fuzzy Logic Algorithm
This consists of the development of a fuzzy logic system that is able to tell how many rays there are in an image based on statistics obtained from the images in the `imgBinary` folder.
 
#### Obtaining statistics
The code is in `getImagesInformation.m`, what it does is that it creates a structure in which the information of the statistics obtained by the `regionprops` method of each image is stored. This structure is then queried by the fuzzy logic algorithm.
 
#### Static lightning counter
The code is in `FuzzyLogicCounter.m`, and what it does is it takes the images from the `imgBinary` folder, and separates them into 90% for training, 5% for validation and testing. This was done this way because it actually uses the same "training" images for later testing.
 
Then it calls a fuzzy logic system, creates the structure with the statistical information of the training images and starts comparing the labels of the images of this structure with those that it calculates with the fuzzy logic system.
 
Finally, it is calculated how accurate the prediction was by dividing by the number of images whose prediction and validation labels were the same over the total number of images analyzed.
 
#### Optimization by genetic algorithm
The code is in `OptimizedCounterAG.m`, and does technically the same thing as the static ray counter, but unlike it, it loads one of the fuzzy logic system configurations (named `generafisConfX.m`, where X is a number from 1 to 4), and optimizes it by means of an objective function, which is defined in the `fobj.m` file. The optimization process varies the values of the fuzzy logic system (which vary in quantity between each of the configurations) to then obtain a set of values with which the smallest error is obtained. This all happens on the line:
 
`X = ga(@fobj,Y,optionsga)` Where Y is the number of variables in any of the configurations.
 
The code then evaluates the configuration with this data set to obtain the error and prediction plots.
 
**The genetic algorithm used a population of 50 individuals for 20 generations to do the optimization**.
 
##### Settings
The idea of the `generafisConf1.m`, `generafisConf2.m`, `generafisConf3.m` and `generafisConf4.m` files is to propose different membership functions, limit values and even a different number of rules, to then compare the results of configurations and determine which had less error. For each of the configurations, 10 executions were made, generating systems that are stored in the `resultadosOptimizacion` folder.
 
 
### Option 2: Counter with convolutional neural networks (RNC)
The `CNNCounter.m` file contains the algorithm that counts how many rays in an image using neural networks. This file does not depend on any other, so it can be executed as normal.
 
#### Training data
For the training of the neural network, the images are taken from the `imgBinary` folder, which contains subfolders whose name serves as a classification label for matlab. The images are separated into 60% for training, 20% for validation and 20% for testing.
 
#### Structure of the neural network
The input layer is one of the 150x150 px images that
use for training. Since it would be very difficult to analyze each pixel individually, a 10-layer 5x5 convolutional filter is used, this is responsible for analyzing the image into segments of size 5x5.
 
It then goes through a layer that reduces the size of the image, and then it goes through another conventional 10-layer 5x5 filter.
 
The final layer gives the classification result, if the image contains 0, 1 or 2 rays.
 
#### Precision
The `YPred` variable is created in which the images classified by the neural network of the `imdsTest` data set are added, and the `YTest` variable is created that contains the labels that correspond to the data set with which we are working. checking. The precision is given by the number of times in which the label of the predicted images are equal to the original labels, over the total number of images analyzed, being 1 (0 100%) the maximum, and 0 the worst possible value. .
 
#### Images that do not add up
Finally, a graph is shown showing the images whose label on how many rays are presented could not be predicted by the neural network.
 
## Results
The results obtained by this system, as well as a theoretical explanation of the operation of the algorithm can be found in the file `paper_final.pdf`.
 
## License
MIT <3.
