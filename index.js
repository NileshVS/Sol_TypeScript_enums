function allUsers() {
    var userRecords = [
        {
            Author: 'JK',
            Bookname: 'Nine tales',
            Price: 100,
            Title: 'Nine tales T',
            Avl: true,
            location: homeTown.India
        },
        {
            Author: 'MK',
            Bookname: 'Eclipse',
            Price: 150,
            Title: 'Eclipse T',
            Avl: false,
            location: homeTown.Canada
        },
        {
            Author: 'NI',
            Bookname: 'Alchemist',
            Price: 200,
            Title: 'Alchemist T',
            Avl: true,
            location: homeTown.USA
        }
    ];
    return userRecords;
}
var homeTown;
(function (homeTown) {
    homeTown[homeTown["USA"] = 0] = "USA";
    homeTown[homeTown["Canada"] = 1] = "Canada";
    homeTown[homeTown["India"] = 2] = "India";
})(homeTown || (homeTown = {}));
;
function getAuthorLocation(location) {
    console.log("Author's current location is: " + homeTown[location]);
    var allAuthor = allUsers();
    var authorInfo = [];
    for (var _i = 0, allAuthor_1 = allAuthor; _i < allAuthor_1.length; _i++) {
        var u = allAuthor_1[_i];
        if (u.Avl) {
            authorInfo.push(u.Author, u.Title);
            break;
        }
    }
    console.log(authorInfo);
    return authorInfo;
}
getAuthorLocation(homeTown.India);
/* function getCurrentUserRecord(record): string{
    let userRecord ='';
    for(let r of record){
        if(r.Avl){
            userRecord=r.Author;
            console.log(`Author name: ${userRecord}`);
            break;
        }
    }
    return userRecord;
}

const users= allUsers();
getCurrentUserRecord(users); */ 
