<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <a href="https://github.com/AntonioLaurance/DronesFlood">
        <img src="fig/logo.png" alt="Logo" width="300" height="300">
    </a>
    <p align="center">
        <em>"For every disaster there's a solution"</em>
    </p>
    <a href="https://github.com/AntonioLaurance/DronesFlood/tree/main/src">
        <strong>Explore the source code »</strong>
    </a> 
</div>
<div align="center">
<p> 

![Contributors][contributors-shield]
![Forks][forks-shield]
![Stargazers][stars-shield]
![Issues][issues-shield]
[![GPL License][license-shield]][license-url]
</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#objectives">Objectives</a></li>
        <li><a href="#requirement-features">Requirement Features</a></li>
        <li><a href="#especifications">Especifications</a></li>
        <li><a href="#learning-goals">Learning Goals</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#developers">Developers</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
</details>


<!-- PROJECT'S MOTIVATION -->
## Motivation

Since the Industrial Revolution, a process that took place around the 18th and 19th centuries, the global average temperature has had a rapid increase that, although insignificant at first glance, has severely impacted our environment and how the future will probably go on (if it does). This *"insignificant"* growth of a little more than 1 degree Celsius, in fact, has triggered the [warmest](https://www.nrdc.org/stories/global-warming-101) of times in all of human history.

You might be wondering: How will a warmer world affect me? Well, it is simple. Rising temperatures are worsening something we all fear: natural disasters, which at the same time, are more prolonged and hotter heat waves, worse and more frequent droughts, unimaginably powerful hurricanes, and of course, heavier and uncontrollable rains.

<div align="center">
    <img src="fig/monterreyFlood.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 1. </strong>Flooding in Monterrey, Mexico (<a href="https://www.bbc.com/news/world-latin-america-53553633">BBC News</a>)
    </p>
</div>

In addition, this warmer climate has another collateral effect, which is the rise in sea level, an additional consequence that, although is mainly caused by global warming, its two leading causes are the expansion of seawater (a phenomenon that occurs when it gets warm) and of course, the added water from melting ice caps and glaciers, thus, having a total average sea level rise since 1993 of [102.5 mm](https://climate.nasa.gov/vital-signs/sea-level/#:~:text=Global%20sea%20levels%20are%20rising,of%20seawater%20as%20it%20warms.).

<div align="center">
    <img src="fig/seaLevel.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 2. </strong>Sea level rise in the last few decades. (<a href="https://climate.nasa.gov/vital-signs/sea-level/#:~:text=Global%20sea%20levels%20are%20rising,of%20seawater%20as%20it%20warms.">NASA</a>)
    </p>
</div>
    
Every year, these natural disasters devastate millions of people, numerous communities, and even entire societies worldwide. Evidently, the consequences of disasters are more significant when talking about countries in current development. Taking this into consideration, both [Mexico and Brazil](https://www.hks.harvard.edu/sites/default/files/centers/cid/files/publications/fellow_graduate_student_working_papers/043.pdf) are regions that should prioritize the creation and optimization of protocols, systems and even engineering solutions as imperative prevention for any unconventional event, as these are countries that lie within one of the world's most active seismic regions; prone to constant droughts and in the path of hurricanes and tropical storms originating in the Caribbean Sea, Atlantic and Pacific Oceans. Indeed, this broad geographic exposure renders that a high share of the country's population may be at hazard risk.
    
Hence, it is crucial to develop an effective network that can provide internet access to people affected by any disaster so that they can communicate with emergency services even in the case that a communication shortage occurs, increase survival rates after similar incidents, quickly mitigate dangers to a region's population, and even help prevent greater catastrophes. Thus, the engineering of a proposal that incorporates a holistic approach and integral implementation of the Internet of Things as an advanced automation and analytics system that mainly incorporates drone networking, electronic and hardware connections, and cloud messaging through brokers and servers become fundamental to the construction of a robust, complete and resilient telecommunication infrastructure capable of sustaining emergency services in natural incidents. As a consequence, the motivation to work in a diverse group of engineers that aim to tackle one of the most frequent and significant challenges of Latin American societies grows and fuels the technological development required to innovate and connect humanity in the most needed of times, once again demonstrating our endurance, strength, empathy, and willingness to thrive.

<div align="center">
    <img src="fig/droneFleet.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 3. </strong>Drone fleet to provide internet access for affected areas. (<a href="https://dronedj.com/2021/10/07/blockchain-tech-may-thwart-hacks-of-automated-drone-fleets/">Crumley, B.</a>)
    </p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT'S OBJECTIVES -->
## Objectives

Taking into account the above information and after analyzing the various existing alternatives to carry out this solution, it is easy to determine that the main objective of this project is to **successfully let people in need reach out the adequate rescue and support resources with very high time efficiency and quality through engineering and the Internet of Things to help mitigate the adverse human consequences of natural disasters**. 
    
Thus, by aiming to work on the correct implementation of the multistage architecture of the Internet of Things (IoT), it will also be essential to focus on the collection of data, data processing, and decision-making based on a 4-stage model that includes actuators, an IoT Gateway, Edge IT, and Cloud that efficiently obtain, react, aggregate, pre-process, and process data.

<div align="center">
    <img src="fig/iotArchitecture.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 4. </strong>Internet of Things Architecture Implemented. (<a href="https://learn.microsoft.com/en-us/azure/architecture/example-scenario/iot/field-cloud-edge-gateways">Microsoft</a>)
    </p>
</div>

For this implementation, as a team of developers, we will jointly need to build a native Android transaction-based mobile application capable of obtaining information from the victims, such as the severity of their condition, a short message describing their situation, and their exact location. Of course, this is where the drones will take place, as Internet access will be very poor or impossible after an adverse natural event, so drones will represent a method of providing life-saving opportunities to affected communities.

<div align="center">
    <img src="fig/uiAndroid.png" width="250">
</div>

<div align="center">
    <p>
        <strong>Figure 5. </strong>User interface of android application. (<a href="https://github.com/kabartsjc/gsl-iot-2022/blob/main/SOLUTION_DESCRIPTION.md">Barreto, A.</a>)
    </p>
</div>

The backbone of this project is the IoT protocol the solution relies on, given that a minimal quantity of resources is within reach of the victims. In this case, the targeted protocol to be used is MQTT, which is very lightweight and uses almost no energy, capable of handling the machine-to-machine (M2M) communications necessary for this context. Consequently, we have proposed ourselves to use the open-source implementation of the protocol with Eclipse-Mosquitto, which will additionally be capable of connecting massive servers with limited smartphones, allowing us to use various network configurations and adapt to the different conditions of devastating events. In this context, it will also be helpful to incorporate a bridge mode that distinguishes between a local broker (drones) and a central broker (the server/virtual machine).

<div align="center">
    <img src="fig/mqttProtocol.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 6. </strong>MQTT Protocol example. (<a href="https://www.paessler.com/es/it-explained/mqtt">Paessler</a>)
    </p>
</div>

Finally, to thoroughly test the capabilities of our solution, we have decided to implement both emulated and actual nodes to generate and then process, store and display their information. This process will use the Mininet-WiFi Network emulator and some Python scripts that will jointly serve as nodes that emulate real people sharing their location, status, and message. Then, we will use a real node based on an Android phone using a developed mobile application, which, like the emulated nodes, will send its location, status, and a short message for the best emergency service attention.

<div align="center">
    <img src="fig/architectureDroneNetwork.png" width="500">
</div>

<div align="center">
    <p>
        <strong>Figure 7. </strong>Implementation of the drone network using real and virtual nodes. (<a href="https://www.paessler.com/es/it-explained/mqtt">Paessler</a>)
    </p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
<!-- Features -->
## Solution features
In order to be more specific and achieve the best results in the implementation of this challenge's solution, several characteristics and requirements need to be considered, including:

- The development of a system of digital devices based on 5 microcontrollers, interconnected in a data network and programmed for the exchange of information through the MQTT communication protocol.
- The design and implementation of an information architecture in an information hosting service in the Cloud, which enables data collection, communication between devices, and the generation of control actions in real time.
- The programming, interconnection and controling of devices that enables data acquisition, actuator control and information generation for network services.
- The analysis of specifications, planning and administration of the execution process of the implementation of networks and device-inteconnections for a real-life application.
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ESPECIFICATIONS -->
## Especifications
<img src="https://forthebadge.com/images/badges/powered-by-coders-sweat.svg" width="300px">
    
[![forthebadge][badge-web]][badge-web]

[![made-with-python][badge-python]][python-url]

<img src="https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" width="200px">
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" width="100px">
<img src="https://img.shields.io/badge/Grafana-F2F4F9?style=for-the-badge&logo=grafana&logoColor=orange&labelColor=F2F4F9" width="150px">

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
<!-- Learning Goals -->
## Learning Goals

- Design, elaborate and analyse digital systems based upon the Internet of Things networks and environments.
- Design and develop databases for the analysis of real-life applications of hard data.
- Implement the management of a computer system's resources as a fundament for the development of engineering projects.
- Incorporate principles of Interactive Design to optimize engineering solutions.
- Build up expertise for the correct and integral Project and Process Management requirements to sustain technical developments.
- Generate international experiences in the GSL initiative.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FINAL PROJECT SOLUTION -->
## Final Deliverables

All the files of the final deliverables and their descriptions are in the repository, which can be found [here](src/clientmqtt/README.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GNU General Public License (GPL). See [license](https://github.com/AntonioLaurance/DronesFlood/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--  DEVELOPERS & CONTACT-->
## Developers

From [Tecnológico de Monterrey](https://www.tec.mx/)

<div align="center">
    <img src="fig/tecDevs.png" width="500">
</div>

- Ricardo Campos Luna - [GitHub](https://github.com/AntonioLaurance) - [Mail](mailto:a01656898@tec.mx)
- Noemí Abigail Curiel López - [GitHub](https://github.com/AbiCuriel) - [Mail](mailto:a01655892@tec.mx)
- Moisés Adame Aguilar - [GitHub](https://github.com/MoisesAdame) - [Mail](mailto:a01660927@tec.mx)
- Juan Francisco Sánchez Sánchez - [GitHub](https://github.com/FranciscoSanchezz) - [Mail](mailto:a01656793@tec.mx)
- Jorge Diego Martell Fernández - [GitHub](https://github.com/A01661436) - [Mail](a01661436@tec.mx)
- Pedro Emiliano Sanciprián Rodríguez - [GitHub](https://github.com/SanciRodrigEmil) - [Mail](a01782190@tec.mx)

In collaboration with [Instituto Tecnológico de Aeronáutica](http://www.ita.br)

- Guilherme Goulart Kowalczuk - [GitHub](https://github.com/kowalks) - [Mail](mailto:guilherme.kowalczuk@ga.ita.br)
- Kenji de Souza Yamane - [GitHub](https://github.com/kenji-yamane) - [Mail](mailto:kenji.yamane@ga.ita.br)
- Yuri Gama de Araújo - [GitHub](https://github.com/yuri-gama) - [Mail](mailto:yuri.araujo@ga.ita.br)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* A special thanks to our teachers ❤️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AntonioLaurance/DronesFlood.svg?style=for-the-badge
[contributors-url]: https://github.com/AntonioLaurance/DronesFlood/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AntonioLaurance/DronesFlood.svg?style=for-the-badge
[forks-url]: https://github.com/AntonioLaurance/DronesFlood/network/members
[stars-shield]: https://img.shields.io/github/stars/AntonioLaurance/DronesFlood.svg?style=for-the-badge
[stars-url]: https://github.com/AntonioLaurance/DronesFlood/stargazers
[issues-shield]: https://img.shields.io/github/issues/AntonioLaurance/DronesFlood.svg?style=for-the-badge
[issues-url]: https://github.com/AntonioLaurance/DronesFlood/issues
[license-shield]: https://img.shields.io/github/license/AntonioLaurance/DronesFlood.svg?style=for-the-badge
[license-url]: https://github.com/AntonioLaurance/DronesFlood/blob/main/LICENSE
[badge-python]: http://ForTheBadge.com/images/badges/made-with-python.svg
[python-url]: https://www.python.org/
[badge-coders-sweat]: https://forthebadge.com/images/badges/powered-by-coders-sweat.svg
[badge-web]: fig/buil-for-the-web.svg
