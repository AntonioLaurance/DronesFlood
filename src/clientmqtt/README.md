This solution was developed and deployed on an Android Emulator that, after running, was able to connect to the mosquitto servers running inside a virtual machine
using the configuration files shown <a href="https://github.com/AntonioLaurance/DronesFlood/tree/main/src/6.5.2MQTT/appMosquittoConfFiles"><strong>here</strong></a>. To see the app and the dashboard properly running, please watch the following video:

[![Youtube Video][badge-yt]][link-yt]


[badge-yt]: ../../fig/watch-the-video-youtube.svg
[link-yt]: https://youtu.be/NuySUh4Uy1Y

Final presentation video:

[![Youtube Video][badge-ytr]][link-ytr]


[badge-ytr]: ../../fig/watch-the-video-youtube.svg
[link-ytr]: https://youtu.be/3q9ScPNGNG4

Final Presentation File can be found <a href="https://github.com/AntonioLaurance/DronesFlood/tree/main/src/clientmqtt/iot_presentation.pdf"><strong>here</strong></a>.

<strong> Instructions to execute solution: </strong>:
Innitiate virtual machine

Run emulator
1. npm install
2. npx react-native start

Run broker, subscriber and dashboard
1. systemctl start grafana
2. systemctl start nginx
3. mosquitto -c mosquittoAPPCB -v
4. mosquito -c mosquittoAPPCB -v
5. python3 sub.py
