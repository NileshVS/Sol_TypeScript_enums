function allUsers (){
    let userRecords=[
        {
            Author: 'JK',
            Bookname: 'Nine tales',
            Price: 100,
            Title: 'Nine tales T',
            Avl:true,
            location: homeTown.India
        },
        {
            Author: 'MK',
            Bookname: 'Eclipse',
            Price: 150,
            Title: 'Eclipse T',
            Avl:false,
            location: homeTown.Canada
        },
        {
            Author: 'NI',
            Bookname: 'Alchemist',
            Price: 200,
            Title: 'Alchemist T',
            Avl:true,
            location: homeTown.USA
        }
    ]
    return userRecords;
}

enum homeTown {'USA','Canada','India'};

function getAuthorLocation(location: homeTown):Array<string>{
    console.log(`Author's current location is: ${homeTown[location]}`);
    let allAuthor=allUsers();
    let authorInfo:string[]=[];
    for (let u of allAuthor){
        if(u.Avl){
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