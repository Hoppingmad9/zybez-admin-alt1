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
}
