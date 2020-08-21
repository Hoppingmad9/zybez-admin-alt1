a1lib.identifyUrl("appconfig.json");
var reader = new ChatBoxReader();
reader.readargs = {
    colors: [
        a1lib.mixcolor(255,255,255),
    ],
    backwards: true,
};
reader.find();

if (reader.pos === null) {
    $(".mats").append(
        "<span>Chat not detected. Please ensure that you are in-game, then click <button onclick='location.reload()'>Refresh</button></span>"
    );
} else {
    reader.pos.mainbox = reader.pos.boxes[0];
}
showSelectedChat(reader.pos);

var chatCheck = reader.read();
var index;

function showSelectedChat(chat) {
    //Attempt to show a temporary rectangle around the chatbox.  skip if overlay is not enabled.
    try {
      alt1.overLayRect(
        a1lib.mixcolor(255, 255, 255),
        chat.mainbox.rect.x,
        chat.mainbox.rect.y,
        chat.mainbox.rect.width,
        chat.mainbox.rect.height,
        2000,
        1
      );
    } catch { }
}

function readChatbox() {
    var opts = reader.read() || [];
    var chat = "";

    console.log(opts);

    for (a in opts) {
        chat += opts[a].text + " ";
    }

    let chatParse = chat.split(/\[([\d]{1,2}:){2}[\d]{1,2}\]/g);
    chatParse.forEach(item => {
        if (item.trim() === "") {
            return;
        }
        if (item.indexOf("[Clan System]") > -1) {
            let username = item.trim().split("[Clan System]")[1].trim().split("has capped at the citadel")[0].trim();
            window.open(
                'https://zybez.co.uk/data_submissions/receive_citadel_capping_usernames.php?username='+username,
                'myIframe'
            );
            console.log(username);
        }
        if (item.indexOf("Provides easy access to your bank") > -1) {
            let username = 'Ironmad9';
            window.open(
                'https://zybez.co.uk/data_submissions/receive_citadel_capping_usernames.php?username='+username,
                'myIframe'
            );
            console.log(username);
        }
    });
}

let tracking = setInterval(function () {
      readChatbox();
    }, 600);
