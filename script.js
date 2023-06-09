function generateCommand() {
    var username = document.getElementById("username").value;
    var sn = document.getElementById("sn").value;
    var gponPort = document.getElementById("gponPort").value;
    var vlan = document.getElementById("vlan").value;
    var profile = document.getElementById("profile").value;

    var command = `int gpon-onu_1/${gponPort}\ndescription ${username} sn ${sn} gpon-onu_1/${gponPort}\ntcont 1 profile ${profile}M\ngemport 1 name INTERNET unicast tcont 1 dir both \ngemport 1 traffic-limit upstream ${profile}M downstream ${profile}M\nswitchport mode hybrid vport 1\nservice-port 1 vport 1 user-vlan ${vlan} vlan ${vlan}\nexit\npon-onu-mng gpon-onu_1/${gponPort}\nservice INTERNET gemport 1 vlan ${vlan}\nwan-ip 1 mode pppoe username ${username} vlan-profile vlan${vlan} host 1\nsecurity-mng 1 state enable mode permit protocol web\nwan 1 service internet host 1`;

    document.getElementById("commandResult").value = command;
}